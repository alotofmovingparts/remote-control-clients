import { TRPCClient } from '@trpc/client';
import type { AppRouter } from './@types/server/src/server/routers/_app';
interface RCClientOptions {
    hostname: string;
    channelKey: string;
    secure?: boolean;
}
export default class RCClient {
    uuid: string;
    channelKey: string;
    trpcClient: TRPCClient<AppRouter>;
    constructor(opts: RCClientOptions);
    update(data: {
        [name: string]: any;
    }, callback?: (err: unknown | null) => void): Promise<void>;
    subscribe(callback: (err: unknown | null, data?: {
        [name: string]: any;
    }) => void): import("@trpc/client/dist/declarations/src/internals/observable").UnsubscribeFn;
    read(callback?: (err: unknown | null, data?: {
        [name: string]: any;
    }) => void): Promise<{
        [name: string]: any;
    } | undefined>;
}
export {};
