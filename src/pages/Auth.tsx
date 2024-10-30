import {Button, Col, Form, Input, Row} from 'antd';
import {memo, useCallback} from 'react';

import {LoginData, ROLE} from '../entities/account/types';
import useAccount from '../store/account';

const {Item} = Form;

const Auth = memo((): JSX.Element | null => {
    const setAccount = useAccount(state => state.setAccount);

    const onFinish = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (values: LoginData) => {
            // dispatch(auth(values));
            setAccount({
                user: {id: '0', first_name: 'Alex', last_name: 'M', email: 'mail@example.com', role: ROLE.ADMIN},
                access_token: '0000-0000',
                refresh_token: '0000-0000',
            });
        },
        [setAccount],
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
                        Log In
                    </Button>
                </Form>
            </Col>
        </Row>
    );
});

export default Auth;
