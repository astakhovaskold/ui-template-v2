import {PaginationParams} from '@/store/pagination/types';
import usePagination from '@/store/pagination/pagination';
import {useShallow} from 'zustand/react/shallow';
import {useCallback} from 'react';

type setParamsFn = (params: Partial<PaginationParams>) => void;

function useParamsPagination(url: string): [PaginationParams, setParamsFn] {
    const paramsPagination = usePagination(useShallow(state => state.params[url] ?? state.defaultParams));
    const set = usePagination(useShallow(state => state.setParams));

    const setParams: setParamsFn = useCallback(params => {
        set(url, params);
    }, []);

    return [paramsPagination, setParams];
}

export default useParamsPagination;
