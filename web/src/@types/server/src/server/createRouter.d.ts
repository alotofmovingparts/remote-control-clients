import * as trpc from '@trpc/server';
export declare function createRouter(): import("@trpc/server/dist/declarations/src/router").Router<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {}, {}, {}, trpc.DefaultErrorShape>;
