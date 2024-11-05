import React, {memo} from 'react';
import Filter from '@/app/modules/purchase-orders/Filter';
import Pagination from '@/app/modules/purchase-orders/Pagination';
import Header from '@/app/modules/purchase-orders/views/Header';

interface ListProps {}

const List = memo<ListProps>((): JSX.Element | null => {
    return (
        <div className="flex flex-col gap-y-4">
            <Filter />
            <Header />
            <Pagination />
        </div>
    );
});

export default List;
