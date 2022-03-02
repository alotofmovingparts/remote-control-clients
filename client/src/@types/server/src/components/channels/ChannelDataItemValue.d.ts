/// <reference types="react" />
import { EditableDataItem } from '@/lib/DataItem';
import { Row } from 'react-table';
export declare const ChannelDataItemValue: ({ value, row: { original: item }, }: {
    value: EditableDataItem['editableValue'];
    row: Row<EditableDataItem>;
}) => JSX.Element;
