import {memo} from 'react';

import Filter from '@/app/modules/list/Filter';
import Pagination from '@/app/modules/list/Pagination';

const List = memo((): JSX.Element | null => {
    return (
        <>
            <Filter />

            <Pagination />
        </>
    );
});

export default List;
