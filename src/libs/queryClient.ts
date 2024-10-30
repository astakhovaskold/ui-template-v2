import {QueryClient, QueryFunction, QueryKey} from '@tanstack/react-query';
import axios from 'axios';
import qs from 'qs';

const isSingleArray = (queryKey: QueryKey): queryKey is [string] => {
    return queryKey.length === 1;
};

const defaultQueryFn: QueryFunction = async ({queryKey, signal}) => {
    let url = '';
    let params = {};

    if (isSingleArray(queryKey)) {
        [url] = queryKey;
    } else {
        const [maybeUrl, maybeParams] = queryKey;
        if (typeof maybeUrl === 'string') url = maybeUrl;
        if (maybeParams && typeof maybeParams === 'object') params = maybeParams;
    }

    const {data} = await axios.get(url, {
        params,
        signal,
        paramsSerializer: p => qs.stringify(p, {arrayFormat: 'repeat'}),
    });
    return data;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});

export default queryClient;
