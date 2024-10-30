/**
 * Created by ASTAKHOV A.A. on 12.01.2023
 */

import {Col, Row} from 'antd';
import {memo} from 'react';

import UsersList from './../entities/users/UsersList';

const Users = memo((): JSX.Element | null => {
    return (
        <Row gutter={24} align="middle">
            <Col flex="auto">
                <h1 className="font-h3">Users</h1>

                <UsersList />
            </Col>
        </Row>
    );
});

export default Users;
