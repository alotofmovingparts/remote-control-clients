/// <reference types="react" />
import { EditableDataItem } from '@/lib/DataItem';
declare type ChannelDataItemDrawerProps = {
    mode: 'create';
    onCreate: (item: EditableDataItem) => Promise<void>;
} | {
    mode: 'edit';
    item: EditableDataItem;
    onUpdate: (item: EditableDataItem) => Promise<void>;
    onDelete: () => Promise<void>;
};
export declare const ChannelDataItemDrawer: (props: ChannelDataItemDrawerProps) => JSX.Element;
export {};
