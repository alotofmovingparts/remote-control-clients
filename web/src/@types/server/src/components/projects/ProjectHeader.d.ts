/// <reference types="react" />
import { Prisma } from '@prisma/client';
declare const projectWithChannel: {
    include: {
        channel: {
            select: {
                key: true;
            };
        };
    };
};
declare type ProjectWithChannel = Prisma.ProjectGetPayload<typeof projectWithChannel>;
export declare const ProjectHeader: ({ project }: {
    project: ProjectWithChannel;
}) => JSX.Element;
export {};
