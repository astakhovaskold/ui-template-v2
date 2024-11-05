import {Layout} from 'antd';
import clsx from 'clsx';
import {memo, PropsWithChildren} from 'react';

import Header from '@/app/components/Layout/Header/Header';
import Sidebar from '@/app/components/Layout/Sidebar/Sidebar';

import {useAuth} from '@/hooks/useAuth';

interface ContainerProps {
    showSidebar?: boolean;
    className?: string;
}

const {Content} = Layout;

const Container = memo<PropsWithChildren<ContainerProps>>(
    ({showSidebar = true, className, children}): JSX.Element | null => {
        const isAuth = useAuth();

        return (
            <Layout style={{minHeight: '100vh'}}>
                {showSidebar && <Sidebar />}

                <Layout>
                    {isAuth && <Header />}

                    <Content className={clsx('px-5 py-4', className)}>{children}</Content>
                </Layout>
            </Layout>
        );
    },
);

export default Container;
