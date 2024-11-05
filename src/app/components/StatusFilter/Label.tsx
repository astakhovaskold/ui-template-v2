import React, {memo, PropsWithChildren} from 'react';
import useStatusColor from '@/app/modules/purchase-orders/hooks/useStatusColor';
import {StatusFilterLabel} from '@/app/components/StatusFilter/types';
import {Badge} from 'antd';

const Label = memo<PropsWithChildren<StatusFilterLabel>>(({amount, status, children}): JSX.Element | null => {
    const color = useStatusColor(status);

    console.log({status});

    return (
        <span className="inline-flex items-center gap-x-1">
            {children}
            <Badge count={amount} color={color} />
        </span>
    );
});

export default Label;
