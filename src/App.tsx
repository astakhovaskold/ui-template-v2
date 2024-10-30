import {Global} from '@emotion/react';
import {Layout} from 'antd';
import {memo} from 'react';
import {Outlet} from 'react-router';

import Header from './components/Header/Header';

import Sidebar from './components/Sidebar/Sidebar';
import AxiosInterceptorAccess from './components/Utils/AxiosInterceptorAccess';
import {AccountDTO} from './entities/account/types';
import {useAuth} from './hooks/useAuth';
import useLS from './hooks/useLS';

import {globalStyles} from './styles/global';
import './styles/main.css';

const {Content} = Layout;

const App = memo((): JSX.Element | null => {
    const isAuth = useAuth();

    useLS<AccountDTO>('account', account => {
        if (account) {
            // dispatch(setAuth(account));
        } else {
            // dispatch(
            //     logout({
            //         quiet: true,
            //     }),
            // );
        }
    });

    return (
        <>
            <Global styles={globalStyles}></Global>

            <AxiosInterceptorAccess />

            <Layout style={{minHeight: '100vh'}}>
                <Sidebar />

                <Layout>
                    {isAuth && <Header />}

                    <Content className="px-5 py-4">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
});

export default App;
