import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import List from '@/app/modules/purchase-orders/List';

const PurchaseOrders = memo((): JSX.Element | null => {
    return (
        <PageContainer title="Purchase Orders">
            <List />
        </PageContainer>
    );
});

export default PurchaseOrders;
