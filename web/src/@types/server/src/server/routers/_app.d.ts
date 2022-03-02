import { Subscription } from '@trpc/server';
export declare const appRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, import("@trpc/server").Prefixer<{} & Record<"findAll", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, undefined, undefined, (import(".prisma/client").Project & {
    channel: {
        key: string;
    } | null;
})[]>> & Record<"find", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, number, number, import(".prisma/client").Project & {
    channel: {
        key: string;
    } | null;
}>>, "project."> & import("@trpc/server").Prefixer<Record<"read", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, string, string, import(".prisma/client").Channel>>, "channel.">, import("@trpc/server").Prefixer<{} & Record<"create", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    location?: string | undefined;
    description?: string | undefined;
    client?: string | undefined;
    name: string;
}, {
    location?: string | undefined;
    description?: string | undefined;
    client?: string | undefined;
    name: string;
}, import(".prisma/client").Project & {
    channel: {
        key: string;
    } | null;
}>> & Record<"update", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    data: {
        name?: string | undefined;
        location?: string | undefined;
        description?: string | undefined;
        client?: string | undefined;
    };
    id: number;
}, {
    data: {
        name?: string | undefined;
        location?: string | undefined;
        description?: string | undefined;
        client?: string | undefined;
    };
    id: number;
}, import(".prisma/client").Project & {
    channel: {
        key: string;
    } | null;
}>> & Record<"delete", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, number, number, number>>, "project."> & import("@trpc/server").Prefixer<Record<"update", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    uuid?: string | undefined;
    key: string;
    data: {
        data?: any;
    };
}, {
    uuid?: string | undefined;
    key: string;
    data: {
        data?: any;
    };
}, import(".prisma/client").Channel>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    uuid?: string | undefined;
    key: string;
}, {
    uuid?: string | undefined;
    key: string;
}, Subscription<import(".prisma/client").Channel>>>, "channel.">, import("@trpc/server").DefaultErrorShape>;
export declare type AppRouter = typeof appRouter;
