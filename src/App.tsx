import {css} from '@emotion/css';
import {Global} from '@emotion/react';
import {Layout} from 'antd';
import {memo} from 'react';
import {Outlet} from 'react-router';

import AxiosInterceptorAccess from './components/Utils/AxiosInterceptorAccess';
import {useAuth} from './hooks/useAuth';
import useLS from './hooks/useLS';
import {logout, setAuth} from './store/account/accountSlice';
import {AccountDTO} from './store/account/types';
import {useAppDispatch} from './store/hooks';

import {globalStyles} from './styles/global';

const {Header, Content} = Layout;

const headerCss = css`
    height: 80px;
`;

const contentCss = css`
    padding: 16px 0;
`;

const App = memo((): JSX.Element | null => {
    const isAuth = useAuth();

    const dispatch = useAppDispatch();

    useLS<AccountDTO>('account', account => {
        if (account) {
            dispatch(setAuth(account));
        } else {
            dispatch(
                logout({
                    quiet: true,
                }),
            );
        }
    });

    return (
        <>
            <Global styles={globalStyles}></Global>

            <AxiosInterceptorAccess />

            {isAuth && <Header className={headerCss} />}

            <Content className={contentCss}>
                <Outlet />
            </Content>
        </>
    );
});

export default App;
