export declare const projectRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
}, {} & Record<"findAll", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
}>>, {} & Record<"create", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
}, number, number, number>>, {}, import("@trpc/server").DefaultErrorShape>;
