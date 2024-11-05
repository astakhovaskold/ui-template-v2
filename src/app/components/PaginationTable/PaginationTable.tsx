import {useQuery} from '@tanstack/react-query';
import {Table, TableProps} from 'antd';
import {PaginationProps} from 'antd/es';
import {ColumnsType, ColumnType} from 'antd/es/table';
import {SortOrder} from 'antd/es/table/interface';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import Context from './Context';
import {PaginationResult, PaginationTableProps} from './types';

import ActionBar from '@/app/components/PaginationTable/ActionBar';
import ActionButton from '@/app/components/PaginationTable/ActionBar/ActionButton';
import {COLUMN_WIDTH} from '@/app/components/PaginationTable/settings';
import useFilterPagination from '@/hooks/pagination/useFilterPagination';
import useParamsPagination from '@/hooks/pagination/useParamsPagination';

import {Common} from '@/typings/common';

function isColumnType<T>(column: ColumnsType<T>[0]): column is ColumnType<T> {
    return 'dataIndex' in column;
}

const scroll: TableProps['scroll'] = {
    x: true,
};

function PaginationTable<T extends Common>({
    url,
    columns: baseColumns,
    uid = url,
    defaultSort,
    actions,
}: PaginationTableProps<T>) {
    const [params, setParams] = useParamsPagination(uid);
    const [filter, setFilter] = useFilterPagination(uid);
    const {page, size, ordering} = params;

    const {data: list, isLoading: loading} = useQuery<PaginationResult<T>>({
        queryKey: [url, Object.assign(params, filter)],
    });

    const [selected, setSelected] = useState<Array<Common['id']>>([]);

    const defaultSortIsSet = useRef(false);
    useEffect(() => {
        defaultSortIsSet.current = false;
    }, [uid]);

    useEffect(() => {
        if (!ordering && defaultSort && !defaultSortIsSet.current) {
            setParams({...params, ordering: defaultSort});
        }

        defaultSortIsSet.current = true;
    }, [defaultSort, setParams, ordering, params]);

    const onChangePagination: Required<TableProps<T>>['onChange'] = useCallback(
        ({current, pageSize}, filtersProps, sortProps) => {
            let nextOrdering: string | undefined = undefined;
            if (sortProps && !Array.isArray(sortProps)) {
                const {order, field, columnKey} = sortProps;
                if (order) {
                    nextOrdering = `${order === 'descend' ? '-' : ''}${
                        columnKey ? columnKey : Array.isArray(field) ? field.join('.') : field
                    }`;
                }
            }

            const hasFilter =
                filtersProps && Object.values(filtersProps).some(f => typeof f !== 'undefined' && f !== null);

            if (hasFilter) {
                const payload = new Map<string, unknown>();

                for (const [key, value] of Object.entries(filtersProps)) {
                    if (value) {
                        payload.set(key, value);
                    }
                }

                setFilter(Object.fromEntries(payload));
            }

            setParams({
                page: typeof current === 'number' ? current - 1 : undefined,
                size: pageSize,
                ordering: nextOrdering,
            });
        },
        [setFilter, setParams],
    );

    const paginationConfig = useMemo<PaginationProps>(() => {
        return {
            current: page + 1,
            pageSize: size,
            total: list?.totalElements ?? 0,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '25', '50'],
            showQuickJumper: false,
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

                const commonProps: typeof column = {
                    ...column,
                    sortOrder,
                };

                if (sortName && column.sorter) {
                    if (key === sortName) {
                        return commonProps;
                    } else if (isColumnType<T>(column)) {
                        const {dataIndex} = column;
                        if (dataIndex === sortName || (Array.isArray(dataIndex) && dataIndex.join('.') === sortName)) {
                            return commonProps;
                        }
                    }
                }

                return {
                    ...commonProps,
                    sortOrder: null,
                };
            }),
        [baseColumns, sortOrder, sortName],
    );

    const hasSelection = !!actions;
    const isActionBarOpen = selected && selected.length > 0;

    const rowSelection = useMemo<TableProps['rowSelection']>(
        () => ({
            type: 'checkbox',
            columnWidth: COLUMN_WIDTH.XS,
            onChange: keys => {
                setSelected(keys as Array<Common['id']>);
            },
            selectedRowKeys: selected,
        }),
        [selected],
    );

    return (
        <Context.Provider value={{url, columns: baseColumns}}>
            <Table<T>
                rowKey="id"
                rowSelection={hasSelection ? rowSelection : undefined}
                columns={columns}
                dataSource={list?.content}
                onChange={onChangePagination}
                pagination={paginationConfig}
                showSorterTooltip={false}
                loading={loading}
                scroll={scroll}
            />

            {hasSelection && (
                <ActionBar open={isActionBarOpen} onClose={() => setSelected([])}>
                    {actions.map(action => (
                        <ActionButton
                            key={action}
                            listUrl={url}
                            // TODO: think about
                            urls={selected.map(id => url + `/${id}`)}
                            action={action}
                        >
                            {action}
                        </ActionButton>
                    ))}
                </ActionBar>
            )}
        </Context.Provider>
    );
}

export default PaginationTable;
