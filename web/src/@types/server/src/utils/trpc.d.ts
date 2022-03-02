/// <reference types="react" />
import type { inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from '../server/routers/_app';
/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */
export declare const trpc: {
    Provider: ({ client, queryClient, children, isPrepass, ssrContext, }: {
        queryClient: import("react-query").QueryClient;
        client: import("@trpc/react").TRPCClient<import("@trpc/server/dist/declarations/src/router").Router<{
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
        }, {
            uuid?: string | undefined;
            key: string;
            data: {
                data?: any;
            };
        }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
        }, import("@trpc/server").Subscription<{
            data: import(".prisma/client").Prisma.JsonObject;
        }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>;
        children: import("react").ReactNode;
        isPrepass?: boolean | undefined;
        ssrContext?: unknown;
    }) => JSX.Element;
    createClient: (opts: import("@trpc/react").CreateTRPCClientOptions<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>) => import("@trpc/react").TRPCClient<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>;
    useContext: () => import("@trpc/react/dist/declarations/src/internals/context").TRPCContextState<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>, unknown>;
    useQuery: <TPath extends "project.findAll" | "project.find" | "channel.read">(pathAndInput: [path: TPath, ...args: import("@trpc/server").inferHandlerInput<(import("@trpc/server").Prefixer<{} & Record<"findAll", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, string, string, import(".prisma/client").Channel>>, "channel.">)[TPath]>], opts?: import("@trpc/react").UseTRPCQueryOptions<TPath, {
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath]["input"], {
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath]["output"], import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>> | undefined) => import("react-query").UseQueryResult<{
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath]["output"], import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>>;
    useMutation: <TPath_1 extends "project.create" | "project.update" | "project.delete" | "channel.update">(path: TPath_1 | [TPath_1], opts?: import("@trpc/react").UseTRPCMutationOptions<{
        "project.create": {
            input: {
                location?: string | undefined;
                description?: string | undefined;
                client?: string | undefined;
                name: string;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.update": {
            input: {
                data: {
                    name?: string | undefined;
                    location?: string | undefined;
                    description?: string | undefined;
                    client?: string | undefined;
                };
                id: number;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.delete": {
            input: number;
            output: number;
        };
        "channel.update": {
            input: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
            output: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
        };
    }[TPath_1]["input"], import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>, {
        "project.create": {
            input: {
                location?: string | undefined;
                description?: string | undefined;
                client?: string | undefined;
                name: string;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.update": {
            input: {
                data: {
                    name?: string | undefined;
                    location?: string | undefined;
                    description?: string | undefined;
                    client?: string | undefined;
                };
                id: number;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.delete": {
            input: number;
            output: number;
        };
        "channel.update": {
            input: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
            output: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
        };
    }[TPath_1]["output"]> | undefined) => import("react-query").UseMutationResult<{
        "project.create": {
            input: {
                location?: string | undefined;
                description?: string | undefined;
                client?: string | undefined;
                name: string;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.update": {
            input: {
                data: {
                    name?: string | undefined;
                    location?: string | undefined;
                    description?: string | undefined;
                    client?: string | undefined;
                };
                id: number;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.delete": {
            input: number;
            output: number;
        };
        "channel.update": {
            input: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
            output: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
        };
    }[TPath_1]["output"], import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>, {
        "project.create": {
            input: {
                location?: string | undefined;
                description?: string | undefined;
                client?: string | undefined;
                name: string;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.update": {
            input: {
                data: {
                    name?: string | undefined;
                    location?: string | undefined;
                    description?: string | undefined;
                    client?: string | undefined;
                };
                id: number;
            };
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "project.delete": {
            input: number;
            output: number;
        };
        "channel.update": {
            input: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
            output: {
                uuid?: string | undefined;
                key: string;
                data: {
                    data?: any;
                };
            };
        };
    }[TPath_1]["input"], unknown>;
    useSubscription: <TPath_2 extends "channel.onUpdate", TOutput extends ReturnType<import("@trpc/server").ThenArg<ReturnType<(import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">)[TPath_2]["call"]>>["output"]>>(pathAndInput: [path: TPath_2, ...args: import("@trpc/server").inferHandlerInput<(import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">)[TPath_2]>], opts: {
        enabled?: boolean | undefined;
        onError?: ((err: import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
        }, {
            uuid?: string | undefined;
            key: string;
            data: {
                data?: any;
            };
        }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
        }, import("@trpc/server").Subscription<{
            data: import(".prisma/client").Prisma.JsonObject;
        }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>) => void) | undefined;
        onNext: (data: TOutput) => void;
    }) => void;
    useDehydratedState: (client: import("@trpc/react").TRPCClient<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>, trpcState: import("react-query").DehydratedState | undefined) => import("react-query").DehydratedState | undefined;
    useInfiniteQuery: <TPath_3 extends never>(pathAndInput: [path: TPath_3, input: Omit<{
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath_3]["input"], "cursor">], opts?: import("@trpc/react").UseTRPCInfiniteQueryOptions<TPath_3, Omit<{
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath_3]["input"], "cursor">, {
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath_3]["output"], import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>> | undefined) => import("react-query").UseInfiniteQueryResult<{
        "project.findAll": {
            input: void | null | undefined;
            output: (import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            })[];
        };
        "project.find": {
            input: number;
            output: import(".prisma/client").Project & {
                channel: {
                    key: string;
                } | null;
            };
        };
        "channel.read": {
            input: string;
            output: import(".prisma/client").Channel;
        };
    }[TPath_3]["output"], import("@trpc/react").TRPCClientErrorLike<import("@trpc/server/dist/declarations/src/router").Router<{
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
    }, {
        uuid?: string | undefined;
        key: string;
        data: {
            data?: any;
        };
    }>>, "channel.">, import("@trpc/server").Prefixer<{}, "project."> & import("@trpc/server").Prefixer<Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
    }, import("@trpc/server").Subscription<{
        data: import(".prisma/client").Prisma.JsonObject;
    }>>>, "channel.">, import("@trpc/server").DefaultErrorShape>>>;
};
/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = inferQueryOutput<'hello'>
 */
export declare type inferQueryOutput<TRouteKey extends keyof AppRouter['_def']['queries']> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;
