import {useCallback} from 'react';
import {useShallow} from 'zustand/react/shallow';

import usePagination from '@/store/pagination/pagination';
import {PaginationParams} from '@/store/pagination/types';

type setParamsFn = (params: Partial<PaginationParams>) => void;

function useParamsPagination(url: string): [PaginationParams, setParamsFn] {
    const paramsPagination = usePagination(useShallow(state => state.params[url] ?? state.defaultParams));
    const set = usePagination(useShallow(state => state.setParams));

    const setParams: setParamsFn = useCallback(
        params => {
            set(url, params);
        },
        [set, url],
    );

    return [paramsPagination, setParams];
}

export default useParamsPagination;
