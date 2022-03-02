/// <reference types="react" />
import { EditableDataItem } from '@/lib/DataItem';
import { Row } from 'react-table';
export declare const ChannelDataItemAction: ({ value: { channelKey }, row: { original: item }, }: {
    value: {
        channelKey: string;
    };
    row: Row<EditableDataItem>;
}) => JSX.Element;
