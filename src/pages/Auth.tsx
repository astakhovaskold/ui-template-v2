import {Button, Col, Form, Input, Row} from 'antd';
import {memo, useCallback} from 'react';

import {auth} from '../store/account/accountSlice';
import {LoginData} from '../store/account/types';
import {useAppDispatch} from '../store/hooks';

const {Item} = Form;

const Auth = memo((): JSX.Element | null => {
    const dispatch = useAppDispatch();

    const onFinish = useCallback(
        (values: LoginData) => {
            dispatch(auth(values));
        },
        [dispatch],
    );

    return (
        <Row>
            <Col span={8} offset={8}>
                <Form onFinish={onFinish} layout="vertical">
                    <h1>Sign In</h1>

                    <Item label="E-mail" name="email">
                        <Input />
                    </Item>

                    <Item label="Password" name="password">
                        <Input.Password autoComplete="current-password" />
                    </Item>

                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form>
            </Col>
        </Row>
    );
});

export default Auth;
