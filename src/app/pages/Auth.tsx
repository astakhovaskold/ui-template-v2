import {Button, Checkbox, Form, Input, Select, Typography} from 'antd';
import {memo, useCallback} from 'react';
import {mockAccount} from '@/libs/mock';
import useAccount from '@/store/account/account';
import {LoginData} from '@/store/account/types';
import SignInRafiki from '../../assets/signIn-rafiki.svg';
import styled from '@emotion/styled';

const {Item} = Form;

const {Title} = Typography;

const ENVIRONMENT_OPTIONS = [
    {
        label: 'PROD',
        value: 'PROD',
    },
    {
        label: 'Select menu item',
        value: 'Select menu item',
    },
    {
        label: 'Select menu item',
        value: 'Select menu item',
    },
];

const AuthPageTitle = styled.h1`
    font-size: 3rem;
    color: var(--color-auth-page-description);
    line-height: 3.5rem;
    text-align: center;
    font-weight: 700;
`;

const AuthPageDescription = styled.p`
    font-size: 2rem;
    color: var(--color-auth-page-description);
    text-align: center;
    font-weight: 300;
`;

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
        <section className="min-h-[100vh] grid grid-cols-12 gap-10">
            <div className="col-span-6 bg-sky-blue-mist flex flex-col">
                <div className="bg-pale-sky h-1/5 flex flex-col justify-center items-center py-10 px-28">
                    <AuthPageTitle>RMS</AuthPageTitle>
                    <AuthPageDescription>
                        A platform to view your metrics, upload and approve your POs
                    </AuthPageDescription>
                </div>
                <div className="flex items-end justify-center flex-1 p-3">
                    <img src={SignInRafiki} alt="Sign In" className="aspect-square" />
                </div>
            </div>

            <div className="col-span-6">
                <Form className="pt-60 w-[400px] mx-auto" onFinish={onFinish} layout="vertical">
                    <Title level={1}>Sign In</Title>

                    <Item label="Email Address" name="email">
                        <Input placeholder="Email Address" />
                    </Item>

                    <Item label="Password" name="password">
                        <Input.Password autoComplete="current-password" placeholder="Password" />
                    </Item>

                    <Item label="Select Environment" name="environment">
                        <Select placeholder="Select Environment" options={ENVIRONMENT_OPTIONS} />
                    </Item>

                    <Item name="rememberMe" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Item>

                    <Button type="primary" htmlType="submit" className="w-full bg-primary">
                        Sign In
                    </Button>

                    {/*<Link className="mt-6 block text-center" href="#">*/}
                    {/*    Forgot Password?*/}
                    {/*</Link>*/}
                </Form>
            </div>
        </section>
    );
});

export default Auth;
