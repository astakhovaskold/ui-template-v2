import {Col, Row} from 'antd';
import {memo} from 'react';

import PurchaseOrdersList from '@/app/modules/purchase-orders/PurchaseOrdersList';
import Container from '@/app/components/Presentation/Container';

const PurchaseOrders = memo((): JSX.Element | null => {
    return (
        <Container>
            <Row gutter={24} align="middle">
                <Col flex="auto">
                    <h1 className="font-h3">Purchase Orders</h1>

                    <PurchaseOrdersList />
                </Col>
            </Row>
        </Container>
    );
});

export default PurchaseOrders;
