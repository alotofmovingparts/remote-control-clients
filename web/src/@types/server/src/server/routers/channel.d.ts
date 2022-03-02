import { Subscription } from '@trpc/server';
import { PrismaClient, Channel, Prisma } from '@prisma/client';
export declare const channelRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, Record<"read", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, string, string, Channel>>, Record<"update", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
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
}>>, Record<"onUpdate", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, {
    session: import("next-auth").Session | null;
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}, {
    uuid?: string | undefined;
    key: string;
}, {
    uuid?: string | undefined;
    key: string;
}, Subscription<{
    data: Prisma.JsonObject;
}>>>, import("@trpc/server").DefaultErrorShape>;
