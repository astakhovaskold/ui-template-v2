import {memo} from 'react';

import Pagination from '@/app/modules/purchase-orders/Pagination';
import PageContainer from '@/app/components/Layout/PageContainer';

const PurchaseOrders = memo((): JSX.Element | null => {
    return (
        <PageContainer title="Purchase Orders">
            <Pagination />
        </PageContainer>
    );
});

export default PurchaseOrders;
