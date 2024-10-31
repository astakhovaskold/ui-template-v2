/**
 * Created by ASTAKHOV A.A. on 12.01.2023
 */

import {Col, Row} from 'antd';
import {memo} from 'react';

import PurchaseOrdersList from '@/app/entities/purchase-orders/PurchaseOrdersList';

const PurchaseOrders = memo((): JSX.Element | null => {
    return (
        <Row gutter={24} align="middle">
            <Col flex="auto">
                <h1 className="font-h3">Users</h1>

                <PurchaseOrdersList />
            </Col>
        </Row>
    );
});

export default PurchaseOrders;
