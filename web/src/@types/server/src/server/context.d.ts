import * as trpc from '@trpc/server';
import { GetSessionParams } from 'next-auth/react';
export declare const createContext: (params?: GetSessionParams | undefined) => Promise<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}>;
export declare type Context = trpc.inferAsyncReturnType<typeof createContext>;
