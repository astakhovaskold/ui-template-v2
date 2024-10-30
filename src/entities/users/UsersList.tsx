/**
 * Created by ASTAKHOV A.A. on 16.01.2023
 */

import {useQuery} from '@tanstack/react-query';
import {Spin} from 'antd';
import {CSSProperties, memo} from 'react';

import {UserDTO} from './types';

const itemStyle: CSSProperties = {
    margin: '16px auto',
};

const UsersList = memo((): JSX.Element | null => {
    const {data: users, isLoading} = useQuery<Array<UserDTO>>({
        queryKey: ['https://jsonplaceholder.typicode.com/users'],
    });

    if (!users?.length) return null;

    return (
        <Spin spinning={isLoading}>
            {users.map(({id, name, address: {geo, ...address}}) => (
                <div key={id} style={itemStyle}>
                    <div>
                        <strong>{name}</strong>
                    </div>
                    <div>
                        Address:&nbsp;
                        {Object.values(address).join(', ')}
                    </div>
                </div>
            ))}
        </Spin>
    );
});

export default UsersList;
