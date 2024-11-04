import {Tag, TagProps} from 'antd';
import {CSSProperties, memo, useMemo} from 'react';

import {PurchaseOrder} from '@/app/modules/purchase-orders/types';

type Props = Pick<PurchaseOrder.DTO, 'status' | 'statusName'>;

const textStyle: CSSProperties = {whiteSpace: 'nowrap'};

const Status = memo<Props>(({status, statusName}): JSX.Element | null => {
    const color = useMemo<TagProps['color']>(() => {
        switch (status) {
            case PurchaseOrder.STATUS.CLOSED:
                return 'default';

            case PurchaseOrder.STATUS.APPROVED:
                return 'success';

            case PurchaseOrder.STATUS.REJECTED:
                return 'error';

            case PurchaseOrder.STATUS.PENDING:
                return 'warning';

            default:
                return 'default';
        }
    }, [status]);

    return (
        <Tag style={textStyle} color={color}>
            {statusName}
        </Tag>
    );
});

export default Status;
