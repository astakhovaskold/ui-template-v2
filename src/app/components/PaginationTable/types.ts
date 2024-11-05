import {ColumnsType} from 'antd/es/table';

import {Common, Status} from '@/typings/common';

export interface PaginationTableProps<T extends Common> {
    url: string;
    columns: ColumnsType<T>;
    uid?: string;
    defaultSort?: `${'' | '-'}${string & keyof T}`;
    selection?: boolean;
    actions?: Array<Action>;
}

export interface PaginationResult<T> {
    content: Array<T>;
    totalElements: number | null;
    totalPages: number | null;
}

export enum ActionTypes {
    DOWNLOAD = 'download',
    DELETE = 'delete',
}

export type Action = ActionTypes | Status;
