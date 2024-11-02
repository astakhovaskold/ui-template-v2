import {Button, Form, Input} from 'antd';
import {memo, useCallback} from 'react';
import {mockAccount} from '@/libs/mock';
import useAccount from '@/store/account/account';
import {LoginData} from '@/store/account/types';

const {Item} = Form;

const Auth = memo((): JSX.Element | null => {
    const auth = useAccount(state => state.auth);

    const onFinish = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (values: LoginData) => {
            auth(mockAccount);
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
