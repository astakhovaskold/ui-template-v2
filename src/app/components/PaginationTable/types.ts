import {ColumnsType} from 'antd/es/table';

import {Common} from '@/typings/common';

export interface PaginationTableProps<T extends Common> {
    url: string;
    columns: ColumnsType<T>;
    uid?: string;
    defaultSort?: `${'' | '-'}${string & keyof T}`;
    selection?: boolean;
}

export interface PaginationResult<T> {
    content: Array<T>;
    totalElements: number | null;
    totalPages: number | null;
}
