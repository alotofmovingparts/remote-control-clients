import { v4 as uuid } from 'uuid';

type UUID = string;

interface ClientMessage {
  type: string;
  uuid: UUID;
}

interface ClientConnectMessage extends ClientMessage {
  type: "connect";
}

interface ClientSetMessage extends ClientMessage {
  type: "set";
  values: { [name: string]: string; }
}

interface ClientReadMessage extends ClientMessage {
  type: "read";
  names: string[];
}

interface ClientClientsMessage extends ClientMessage {
  type: "clients";
}

interface ServerMessage {
  type: string;
}

interface ServerSetResponseMessage extends ServerMessage {
  type: "set_response";
  uuid: UUID;
}

interface ServerReadResponseMessage extends ServerMessage {
  type: "read_response";
  values: { [name: string]: string; }
  uuid: UUID;
}

interface ServerClientsResponseMessage extends ServerMessage {
  type: "clients_response";
  clients: string[];
  uuid: UUID;
}

interface ServerConnectMessage extends ServerMessage {
  type: "connect_response";
  initialValues: { [name: string]: string; }
  clients: string[];
  uuid: UUID;
}

interface ServerUpdateMessage extends ServerMessage {
  type: "update";
  values: { [name: string]: string; }
  clients: string[];
}

interface ServerErrorMessage extends ServerMessage {
  type: "error";
  message: string;
  uuid?: UUID;
}


type TouchControlEventType = "connect" | "disconnect" | "update" | "error";

enum TouchControlClientState {
  Connecting = "CONNECTING",
  Connected = "CONNECTED",
  Disconnected = "DISCONNECTED"
}

export default class TouchControlClient extends EventTarget {
  url: string;
  ws?: WebSocket;
  state: TouchControlClientState;
  _callbacks: { [id: UUID]: (err: Error | null, ...args: any) => void }

  constructor(url: string) {
    super();
    this.url = url;
    this.state = TouchControlClientState.Disconnected;
    this._callbacks = {};
  }

  connect(callback?: (err: Error | null, initialValues?: any, clients?: any) => void) {
    this.state = TouchControlClientState.Connecting;
    this.ws = new WebSocket(this.url);
    this.ws.onopen = (event: Event) => {
      const id = uuid();
      if (callback) this._callbacks[id] = callback;
      const message: ClientConnectMessage = {
        type: "connect",
        uuid: id
      }
      this.ws?.send(JSON.stringify(message));
    }
    this.ws.onclose = (event: CloseEvent) => {
      this.state = TouchControlClientState.Disconnected;
      this.dispatchEvent(new CustomEvent('disconnect'));
    };
    this.ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as ServerMessage;

      let message:
        ServerSetResponseMessage |
        ServerReadResponseMessage |
        ServerClientsResponseMessage |
        ServerConnectMessage |
        ServerUpdateMessage |
        ServerErrorMessage;
      switch (data.type) {
        case "set_response":
          message = data as ServerSetResponseMessage;
          if (message.uuid in this._callbacks) {
            const callback = this._callbacks[message.uuid]
            delete this._callbacks[message.uuid];
            callback(null);
          }
          break;
        case "read_response":
          message = data as ServerReadResponseMessage;
          if (message.uuid in this._callbacks) {
            const callback = this._callbacks[message.uuid]
            delete this._callbacks[message.uuid];
            const keys = Object.keys(message.values);
            if (keys.length > 1) {
              callback(null, message.values);
            } else {
              const name = keys[0];
              callback(null, message.values[name]);
            }            
          }
          break;
        case "clients_response":
          message = data as ServerClientsResponseMessage;
          if (message.uuid in this._callbacks) {
            const callback = this._callbacks[message.uuid]
            delete this._callbacks[message.uuid];
            callback(null, message.clients);
          }
          break;
        case "connect_response":
          message = data as ServerConnectMessage;
          this.state = TouchControlClientState.Connected;
          if (message.uuid in this._callbacks) {
            const callback = this._callbacks[message.uuid]
            delete this._callbacks[message.uuid];
            callback(null, message.initialValues, message.clients);
          }
          this.dispatchEvent(new CustomEvent('connect', { detail: message}));
          break;
        case "update":
          message = data as ServerUpdateMessage;
          this.dispatchEvent(new CustomEvent('update', { detail: message}));
          break;
        case "error":
          message = data as ServerErrorMessage;
          if (message.uuid && message.uuid in this._callbacks) {
            const callback = this._callbacks[message.uuid]
            delete this._callbacks[message.uuid];
            callback(new Error(message.message));
          }
          this.dispatchEvent(new CustomEvent('error', { detail: message}));
          break;
        default:
          break;
      }
    };
    this.ws.onerror = (event: Event) => {
      const message: ServerErrorMessage = {
        type: "error",
        message: String(event)
      }
      this.dispatchEvent(new CustomEvent('error', { detail: message}));
    };
  }

  set(name: string, value: any, callback?: (err: Error | null) => void) {
    const id = uuid();
    if (callback) this._callbacks[id] = callback;
    const message: ClientSetMessage = {
      type: "set",
      values: {
        [name]: String(value)
      },
      uuid: id
    }
    this.ws?.send(JSON.stringify(message));
  }

  read(name?: string, callback?: (err: Error | null, value?: string | { [name: string]: string; }) => void) {
    const id = uuid();
    if (callback) this._callbacks[id] = callback;
    const names = name ? [name] : [];
    const message: ClientReadMessage = {
      type: "read",
      names,
      uuid: id
    }
    this.ws?.send(JSON.stringify(message));
  }
  
  clients(callback?: (err: Error | null) => void) {
    const id = uuid();
    if (callback) this._callbacks[id] = callback;
    const message: ClientClientsMessage = {
      type: "clients",
      uuid: id
    }
    this.ws?.send(JSON.stringify(message));
  }

  disconnect() {
    this.ws?.close();
  }
}