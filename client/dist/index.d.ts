export interface Message {
    type: string;
}
declare enum TouchControlClientState {
    Connecting = "CONNECTING",
    Open = "OPEN",
    Closed = "CLOSED"
}
export default class TouchControlClient extends EventTarget {
    url: string;
    ws?: WebSocket;
    state: TouchControlClientState;
    constructor(url: string);
    connect(callback?: (err: Error | null, initialValues: any, clients: any) => void): void;
    sendValue(name: string, value: any, callback?: (err?: Error | null) => void): void;
    on(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    off(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export {};
