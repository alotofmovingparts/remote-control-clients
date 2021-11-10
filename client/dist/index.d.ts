export interface Message {
    type: string;
}
export declare class TouchControlClient extends EventTarget {
    url: string;
    ws?: WebSocket;
    constructor(url: string);
    connect(callback?: (err: Error | null, initialValues: any, clients: any) => void): void;
    sendValue(name: string, value: any, callback?: (err?: Error | null) => void): void;
    on(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    off(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
