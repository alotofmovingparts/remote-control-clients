export interface Message {
  type: string;
}

export default class TouchControlClient extends EventTarget {
  url: string;
  ws?: WebSocket;

  constructor(url: string) {
    super();
    this.url = url;
    this.addEventListener('message', (event: Event) => console.log(event));
  }

  connect(callback?: (err: Error | null, initialValues: any, clients: any) => void) {
    this.ws = new WebSocket(this.url);
    this.ws.onopen = (event: Event) => {
      const e = new Event('open');
      this.dispatchEvent(e);
    };
    this.ws.onclose = (event: CloseEvent) => {
      const e = new CloseEvent('close', {code: event.code});
      this.dispatchEvent(e);
    };
    this.ws.onmessage = (event: MessageEvent) => {
      const e = new MessageEvent('message', { data: event.data})
      this.dispatchEvent(e);
    };
    this.ws.onerror = (event: Event) => {
      this.dispatchEvent(event);
    };
    const e = new Event('connecting');
    this.dispatchEvent(e);
  }

  sendValue(name: string, value: any, callback?: (err?: Error | null) => void) {
    this.ws?.send(JSON.stringify({name, value}));
  }

  on(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void {
    return this.addEventListener(type, callback, options);
  }

  off(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void {
    return this.removeEventListener(type, callback, options);
  }

}