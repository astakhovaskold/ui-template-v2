import {useMemo} from 'react';
import {TagProps} from 'antd';
import {PurchaseOrder} from '@/app/modules/purchase-orders/types';
import {Status} from '@/app/components/StatusFilter/types';

const byDefault = '#1677FF';

function useStatusColor(status: Status): string {
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
                return byDefault;
        }
    }, [status]);

    return color ?? byDefault;
}

export default useStatusColor;
