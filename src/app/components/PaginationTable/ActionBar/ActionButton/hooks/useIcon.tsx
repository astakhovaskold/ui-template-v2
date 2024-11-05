import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    DeleteOutlined,
    DownloadOutlined,
    FlagOutlined,
} from '@ant-design/icons';
import {ReactNode, useMemo} from 'react';

import {Action, ActionTypes} from '@/app/components/PaginationTable/types';
import {STATUS} from '@/app/modules/list/types';

function useIcon(status: Action): ReactNode | undefined {
    const icon = useMemo<ReactNode>(() => {
        switch (status) {
            case STATUS.CLOSED:
                return <FlagOutlined />;

            case STATUS.APPROVED:
                return <CheckCircleOutlined />;

            case STATUS.PENDING:
                return <ClockCircleOutlined />;

            case ActionTypes.DELETE:
                return <DeleteOutlined />;

            case ActionTypes.DOWNLOAD:
                return <DownloadOutlined />;

            default:
                return undefined;
        }
    }, [status]);

    return icon;
}

export default useIcon;
