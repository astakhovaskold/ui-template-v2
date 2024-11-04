import {Table, TableProps} from 'antd';
import {PaginationProps} from 'antd/es';
import {ColumnsType, ColumnType} from 'antd/es/table';
import {SortOrder} from 'antd/es/table/interface';
import {useCallback, useEffect, useMemo, useRef} from 'react';

import {Common} from '@/typings/common';
import useFilterPagination from '@/hooks/pagination/useFilterPagination';
import useParamsPagination from '@/hooks/pagination/useParamsPagination';

import {PaginationResult, PaginationTableProps} from './types';
import {useQuery} from '@tanstack/react-query';
import {COLUMN_WIDTH, IS_SELECTION_ENABLED} from '@/app/components/PaginationTable/settings';

function isColumnType<T>(column: ColumnsType<T>[0]): column is ColumnType<T> {
    return 'dataIndex' in column;
}

function PaginationTable<T extends Common>({
    url,
    columns: baseColumns,
    uid = url,
    defaultSort,
}: PaginationTableProps<T>) {
    const [params, setParams] = useParamsPagination(uid);
    const [filter] = useFilterPagination(uid);
    const {page, size, ordering} = params;

    const {data: list, isLoading: loading} = useQuery<PaginationResult<T>>({
        queryKey: [url, Object.assign(params, filter)],
    });

    const defaultSortIsSet = useRef(false);
    useEffect(() => {
        defaultSortIsSet.current = false;
    }, [uid]);

    useEffect(() => {
        if (!ordering && defaultSort && !defaultSortIsSet.current) {
            setParams({ordering: defaultSort});
        }

        defaultSortIsSet.current = true;
    }, [defaultSort, setParams, ordering]);

    const onChangePagination: Required<TableProps<T>>['onChange'] = useCallback(
        ({current, pageSize}, _, sortProps) => {
            let nextOrdering: string | undefined = undefined;

            if (sortProps && !Array.isArray(sortProps)) {
                const {order, field, columnKey} = sortProps;
                if (order) {
                    nextOrdering = `${order === 'descend' ? '-' : ''}${
                        columnKey ? columnKey : Array.isArray(field) ? field.join('.') : field
                    }`;
                }
            }

            setParams({
                page: typeof current === 'number' ? current - 1 : undefined,
                size: pageSize,
                ordering: nextOrdering,
            });
        },
        [setParams],
    );

    const paginationConfig = useMemo<PaginationProps>(() => {
        return {
            current: page + 1,
            pageSize: size,
            total: list?.totalElements ?? 0,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '25', '50'],
            showQuickJumper: true,
            hideOnSinglePage: false,
        };
    }, [list, page, size]);

    const {sortOrder, sortName} = useMemo<{sortOrder: SortOrder | null; sortName: string | null}>(() => {
        return {
            sortOrder: ordering ? (ordering.charAt(0) === '-' ? 'descend' : 'ascend') : null,
            sortName: ordering ? ordering.replace('-', '') : null,
        };
    }, [ordering]);

    const columns = useMemo(
        () =>
            baseColumns.map(column => {
                const {key} = column;
                if (sortName && column.sorter) {
                    if (key === sortName) {
                        return {
                            ...column,
                            sortOrder,
                        };
                    } else if (isColumnType<T>(column)) {
                        const {dataIndex} = column;
                        if (dataIndex === sortName || (Array.isArray(dataIndex) && dataIndex.join('.') === sortName)) {
                            return {
                                ...column,
                                sortOrder,
                            };
                        }
                    }
                }

                return {
                    ...column,
                    sortOrder: null,
                };
            }),
        [baseColumns, sortOrder, sortName],
    );

    return (
        <Table<T>
            rowSelection={IS_SELECTION_ENABLED ? {type: 'checkbox', columnWidth: COLUMN_WIDTH.XS} : undefined}
            columns={columns}
            dataSource={list?.content}
            onChange={onChangePagination}
            pagination={paginationConfig}
            showSorterTooltip={false}
            rowKey="id"
            loading={loading}
            scroll={{x: true}}
        />
    );
}

export default PaginationTable;
