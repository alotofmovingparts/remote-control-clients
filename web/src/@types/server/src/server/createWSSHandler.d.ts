import type { WebSocketServer } from 'ws';
export default function createWSSHandler(wss: WebSocketServer): {
    broadcastReconnectNotification: () => void;
};
