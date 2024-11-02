import axios from 'axios';
import {memo, useEffect} from 'react';

import {useAuth} from '@/hooks/useAuth';
import useAccount from '@/store/account/account';

const AxiosInterceptorAccess = memo((): JSX.Element | null => {
    const isAuth = useAuth();

    const {logout} = useAccount(state => state);

    useEffect(() => {
        if (isAuth) {
            const interceptor = axios.interceptors.response.use(
                response => {
                    return response;
                },
                error => {
                    if (error?.response?.status === 401) {
                        logout();
                    }

                    return Promise.reject(error);
                },
            );

            return () => {
                axios.interceptors.response.eject(interceptor);
            };
        }
    }, [isAuth, logout]);

    return null;
});

export default AxiosInterceptorAccess;
