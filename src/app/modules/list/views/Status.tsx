import {Tag, TagProps} from 'antd';
import clsx from 'clsx';
import {memo, useMemo} from 'react';

import {STATUS, EntityDTO} from '@/app/modules/list/types';

type Props = Pick<EntityDTO, 'status'>;

const Status = memo<Props>(({status}): JSX.Element | null => {
    const color = useMemo<TagProps['color']>(() => {
        switch (status) {
            case STATUS.CLOSED:
                return 'var(--color-closed)';

            case STATUS.APPROVED:
                return 'success';

            case STATUS.PENDING:
                return 'warning';

            default:
                return 'default';
        }
    }, [status]);

    return (
        <Tag
            className={clsx('whitespace-nowrap capitalize', {
                'border-1 !border-closed': status === STATUS.CLOSED,
            })}
            color={color}
        >
            {status?.toString().toLowerCase()}
        </Tag>
    );
});

export default Status;
