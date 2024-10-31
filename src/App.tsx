import {Layout} from 'antd';
import {memo} from 'react';
import {Outlet} from 'react-router';

import './styles/main.css';
import '/fonts/fonts.css?url';

import {useAuth} from '@/hooks/useAuth';

import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Header from '@/app/components/Header/Header';

const {Content} = Layout;

const App = memo((): JSX.Element | null => {
    const isAuth = useAuth();

    return (
        <>
            <AxiosInterceptorAccess />

            {isAuth ? (
                <Layout style={{minHeight: '100vh'}}>
                    <Sidebar />

                    <Layout>
                        {isAuth && <Header />}

                        <Content className="px-5 py-4">
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            ) : (
                <Outlet />
            )}
        </>
    );
});

export default App;
