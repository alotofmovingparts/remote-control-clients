import { Prisma } from '@prisma/client';
export interface DataItem {
    name: string;
    value: Prisma.JsonValue;
}
export interface EditableDataItem {
    name: string;
    value: Prisma.JsonValue;
    type: 'number' | 'boolean' | 'string' | 'object' | 'array' | 'null';
    editableValue: string | number | boolean | null;
    editableType: 'number' | 'boolean' | 'string' | 'object' | 'null';
}
export interface CastDataItem {
    name: string;
    editableValue: string | number | boolean | null;
    editableType: 'number' | 'boolean' | 'string' | 'object' | 'null';
}
export declare const unmarshall: ({ name, value }: DataItem) => EditableDataItem;
export declare const marshall: ({ name, editableType, editableValue, value, }: EditableDataItem) => DataItem;
export declare const fromCastDataItem: ({ name, editableType, editableValue, }: CastDataItem) => EditableDataItem;
export declare const fromData: (data: Prisma.JsonObject) => DataItem[];
