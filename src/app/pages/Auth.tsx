import {Button, Col, Form, Input, Row} from 'antd';
import {memo, useCallback} from 'react';
import useAccount from '@/store/account';
import {LoginData, ROLES} from '@/store/types';

const {Item} = Form;

const Auth = memo((): JSX.Element | null => {
    const auth = useAccount(state => state.auth);

    const onFinish = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (values: LoginData) => {
            auth({
                user: {id: 8008135, first_name: 'Alex', last_name: 'M', email: 'mail@example.com', role: ROLES.ADMIN},
                access_token: '0000-0000',
                refresh_token: '0000-0000',
            });
        },
        [auth],
    );

    return (
        <section className="min-h-[100vh] px-5 pt-3 grid grid-cols-12 gap-10">
            <div className="col-span-6"></div>

            <div className="col-span-6">
                <Form className="pt-40 w-[400px] mx-auto" onFinish={onFinish} layout="vertical">
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
            </div>
        </section>
    );
});

export default Auth;
