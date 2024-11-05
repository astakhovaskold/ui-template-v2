import {Tag} from 'antd';
import {CSSProperties, memo} from 'react';

import {PurchaseOrder} from '@/app/modules/purchase-orders/types';
import useStatusColor from '@/app/modules/purchase-orders/hooks/useStatusColor';

type Props = Pick<PurchaseOrder.DTO, 'status' | 'statusName'>;

const textStyle: CSSProperties = {whiteSpace: 'nowrap'};

const Status = memo<Props>(({status, statusName}): JSX.Element | null => {
    const color = useStatusColor(status);

    return (
        <Tag style={textStyle} color={color}>
            {statusName}
        </Tag>
    );
});

export default Status;
