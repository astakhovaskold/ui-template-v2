import {EyeOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {ColumnsType} from 'antd/es/table';

import {NavLink} from 'react-router-dom';

import {EntityDTO} from '@/app/modules/list/types';
import Status from '@/app/modules/list/views/Status';

const columns: ColumnsType<EntityDTO> = [
    {
        dataIndex: 'name',
        title: 'Name',
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: 'Status',
        render: (_, {status}) => <Status status={status} />,
    },
    {
        dataIndex: 'id',
        title: 'Actions',
        render: (_, {id}) => (
            <>
                <Button type="link" href={`/entities/${id}`}>
                    Open
                </Button>
            </>
        ),
    },
];

export default columns;
