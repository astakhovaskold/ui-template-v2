import React, {memo, PropsWithChildren} from 'react';
import Sidebar from '@/app/components/Layout/Sidebar/Sidebar';
import {Layout} from 'antd';
import Header from '@/app/components/Layout/Header/Header';
import {Outlet} from 'react-router';
import {useAuth} from '@/hooks/useAuth';

interface ContainerProps {
    showSidebar?: boolean;
}

const {Content} = Layout;

const Container = memo<PropsWithChildren<ContainerProps>>(({showSidebar = true, children}): JSX.Element | null => {
    const isAuth = useAuth();

    return (
        <Layout style={{minHeight: '100vh'}}>
            {showSidebar && <Sidebar />}

            <Layout>
                {isAuth && <Header />}

                <Content className="px-5 py-4">{children}</Content>
            </Layout>
        </Layout>
    );
});

export default Container;
