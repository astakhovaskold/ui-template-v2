import {paginationFilter} from '@/store/pagination/types';
import usePagination from '@/store/pagination/pagination';
import {useShallow} from 'zustand/react/shallow';
import {useCallback} from 'react';

type setFilterFn<T> = (filter: T) => void;

function useFilterPagination<T extends paginationFilter>(url: string): [Partial<T>, setFilterFn<Partial<T>>] {
    const filterPagination = usePagination(useShallow(state => (state.filter[url] as Partial<T>) ?? {}));
    const set = usePagination(useShallow(state => state.setFilter));

    const setFilter: setFilterFn<Partial<T>> = useCallback(params => {
        set(url, params);
    }, []);

    return [filterPagination, setFilter];
}

export default useFilterPagination;
