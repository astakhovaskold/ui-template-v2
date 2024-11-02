import {memo} from 'react';

import PurchaseOrdersList from '@/app/modules/purchase-orders/PurchaseOrdersList';
import PageContainer from '@/app/components/Layout/PageContainer';

const PurchaseOrders = memo((): JSX.Element | null => {
    return (
        <PageContainer title="Purchase Orders">
            <PurchaseOrdersList />
        </PageContainer>
    );
});

export default PurchaseOrders;
