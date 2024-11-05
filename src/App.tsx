import {memo} from 'react';
import {Outlet} from 'react-router';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';

import '@/libs/mockApi';

const App = memo((): JSX.Element | null => {
    return (
        <>
            <AxiosInterceptorAccess />

            <Outlet />
        </>
    );
});

export default App;
