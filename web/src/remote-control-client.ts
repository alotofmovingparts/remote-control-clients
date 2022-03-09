import { v4 as uuid } from 'uuid';
import superjson from 'superjson';
import { wsLink, createWSClient } from '@trpc/client/links/wsLink';
import { createTRPCClient, TRPCClient } from '@trpc/client';
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

  constructor(opts: RCClientOptions) {
    if (typeof opts !== 'object') throw new Error('RCClient: options required');
    if (
      typeof opts['hostname'] !== 'string' ||
      opts['hostname'] === '' ||
      opts['hostname'].startsWith('http')
    ) {
      throw new Error(`RCClient: 'hostname' required, e.g. 'example.com'`);
    }
    if (
      typeof opts['channelKey'] !== 'string' ||
      !new RegExp('^[A-Za-z0-9-_.~]*$').test(opts['channelKey'])
    ) {
      throw new Error(
        `RCClient: 'channelKey' required, e.g. 'abcdefghij_0123456789'`
      );
    }
    const { hostname, channelKey, secure = true } = opts;
    this.uuid = uuid();
    this.channelKey = channelKey;

    const clientBase = `${secure ? 'https' : 'http'}://${hostname}`;
    const clientURL = new URL('/api/trpc', clientBase).toString();
    const wsURL = `${secure ? 'wss' : 'ws'}://${hostname}`;
    const wsClient = createWSClient({
      url: wsURL,
    });
    const link = wsLink<AppRouter>({
      client: wsClient,
    });
    this.trpcClient = createTRPCClient<AppRouter>({
      url: clientURL,
      links: [link],
      transformer: superjson,
    });
  }

  async update(
    data: { [name: string]: any },
    callback?: (err: unknown | null) => void
  ) {
    try {
      await this.trpcClient.mutation('channel.update', {
        key: this.channelKey,
        data: {
          data,
        },
        uuid: this.uuid,
      });
      if (callback) callback(null);
    } catch (error) {
      if (callback) callback(error);
    }
  }

  subscribe(
    callback: (err: unknown | null, data?: { [name: string]: any }) => void
  ) {
    return this.trpcClient.subscription(
      'channel.onUpdate',
      {
        key: this.channelKey,
        uuid: this.uuid,
      },
      {
        onNext: (res) => {
          if (res.type === 'data') {
            callback(null, res.data.data as { [name: string]: any });
          }
        },
        onError: (err) => callback(err),
      }
    );
  }

  async read(
    callback?: (err: unknown | null, data?: { [name: string]: any }) => void
  ) {
    try {
      const data = await this.trpcClient.query('channel.read', this.channelKey);
      if (callback) {
        callback(null, data.data as { [name: string]: any });
      } else {
        return data.data as { [name: string]: any };
      }
    } catch (error) {
      if (callback) {
        callback(error);
      } else {
        throw error;
      }
    }
  }
}
