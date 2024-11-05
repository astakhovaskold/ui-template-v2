import {Input} from 'antd';
import {memo, useCallback, useContext} from 'react';

import Context from '@/app/components/PaginationTable/Context';
import useFilterPagination from '@/hooks/pagination/useFilterPagination';

interface SearchFieldProps {
    url?: string;
}

const {Search} = Input;

const SearchField = memo<SearchFieldProps>(({url: urlProp}): JSX.Element | null => {
    const {url} = useContext(Context) ?? {};

    const [, setFilter] = useFilterPagination(urlProp ?? url);

    const onSearch = useCallback(
        (value: string) => {
            if (value.length > 3) {
                setFilter({search: value});
            }
        },
        [setFilter],
    );

    const onClear = useCallback(() => {
        setFilter({search: undefined});
    }, [setFilter]);

    return <Search placeholder="Search" onSearch={onSearch} onClear={onClear} allowClear />;
});

export default SearchField;
