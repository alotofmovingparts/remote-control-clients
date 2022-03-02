/// <reference types="react" />
import * as Yup from 'yup';
import { Project } from '@prisma/client';
declare const CreateProjectSchema: Yup.ObjectSchema<{
    name: string;
    location: string | undefined;
    description: string | undefined;
    client: string | undefined;
}, Yup.AnyObject, {
    name: undefined;
    location: undefined;
    description: undefined;
    client: undefined;
}, "">;
declare type CreateProject = Yup.InferType<typeof CreateProjectSchema>;
declare type ProjectDrawerProps = {
    mode: 'create';
    onCreate: (values: CreateProject) => Promise<void>;
} | {
    mode: 'edit';
    values: Project;
    onUpdate: (values: CreateProject) => Promise<void>;
    onDelete: () => Promise<void>;
};
export declare const ProjectDrawer: (props: ProjectDrawerProps) => JSX.Element;
export {};
