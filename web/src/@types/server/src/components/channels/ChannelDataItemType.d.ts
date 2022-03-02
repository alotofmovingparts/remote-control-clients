/// <reference types="react" />
import { EditableDataItem } from '@/lib/DataItem';
import { Row } from 'react-table';
export declare const ChannelDataItemType: ({ value: type, row: { original: item }, }: {
    value: EditableDataItem['type'];
    row: Row<EditableDataItem>;
}) => JSX.Element;
