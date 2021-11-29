declare type UUID = string;
declare enum TouchControlClientState {
    Connecting = "CONNECTING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
}
export default class TouchControlClient extends EventTarget {
    url: string;
    ws?: WebSocket;
    state: TouchControlClientState;
    _callbacks: {
        [id: UUID]: (err: Error | null, ...args: any) => void;
    };
    _listeners: {
        [event: string]: ((...args: any) => void)[];
    };
    constructor(url: string);
    connect(callback?: (err: Error | null, initialValues?: any, clients?: any) => void): void;
    set(name: string, value: any, callback?: (err: Error | null) => void): void;
    read(name?: string, callback?: (err: Error | null, value?: string | {
        [name: string]: string;
    }) => void): void;
    clients(callback?: (err: Error | null) => void): void;
    disconnect(): void;
    on(name: string, listener: (...args: any) => void): void;
    off(name: string, listener: (...args: any) => void): void;
}
export {};
