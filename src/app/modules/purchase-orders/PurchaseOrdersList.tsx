import {memo} from 'react';

import {UserDTO} from './types';
import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import {ColumnsType} from 'antd/es/table';
import API from '@/libs/API';
import {Link} from 'react-router-dom';

const columns: ColumnsType<UserDTO> = [
    {
        dataIndex: 'username',
        title: 'Ник',
    },
    {
        dataIndex: 'name',
        title: 'Имя',
    },
    {
        key: 'id',
        align: 'right',
        render: (_, {id}) => <Link to={`${id}`}>Открыть</Link>,
    },
];

const PurchaseOrdersList = memo((): JSX.Element | null => {
    return <PaginationTable<UserDTO> url={API.users()} columns={columns} />;
});

export default PurchaseOrdersList;
