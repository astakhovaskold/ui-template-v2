import React, {memo} from 'react';
import StatusFilter from '@/app/components/StatusFilter/StatusFilter';
import {CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, FlagOutlined} from '@ant-design/icons';
import API from '@/libs/API';
import {PurchaseOrder} from '@/app/modules/purchase-orders/types';

interface FilterProps {}

const Filter = memo<FilterProps>((): JSX.Element | null => {
    return (
        <div>
            <StatusFilter<PurchaseOrder.STATUS>
                url={API.purchaseOrders()}
                total={5}
                options={[
                    {
                        title: 'Pending',
                        value: PurchaseOrder.STATUS.PENDING,
                        icon: <ClockCircleOutlined />,
                        amount: 25,
                    },
                    {
                        title: 'Approved',
                        value: PurchaseOrder.STATUS.APPROVED,
                        icon: <CheckCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Rejected',
                        value: PurchaseOrder.STATUS.REJECTED,
                        icon: <CloseCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Closed',
                        value: PurchaseOrder.STATUS.CLOSED,
                        icon: <FlagOutlined />,
                        amount: 21,
                    },
                ]}
            />
        </div>
    );
});

export default Filter;
