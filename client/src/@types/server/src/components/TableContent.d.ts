/// <reference types="react" />
import { Column } from 'react-table';
import { EditableDataItem } from '@/lib/DataItem';
export declare const TableContent: ({ columns, data, }: {
    columns: Column<EditableDataItem>[];
    data: any[];
}) => JSX.Element;
