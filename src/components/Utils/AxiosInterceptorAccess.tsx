import axios from 'axios';
import {memo, useEffect} from 'react';

import {useAuth} from '../../hooks/useAuth';

const AxiosInterceptorAccess = memo((): JSX.Element | null => {
    const isAuth = useAuth();

    useEffect(() => {
        if (isAuth) {
            const interceptor = axios.interceptors.response.use(
                response => {
                    return response;
                },
                error => {
                    if (error?.response?.status === 401) {
                        // dispatch(logout({quiet: true}));
                    }

                    return Promise.reject(error);
                },
            );

            return () => {
                axios.interceptors.response.eject(interceptor);
            };
        }
    }, [isAuth]);

    return null;
});

export default AxiosInterceptorAccess;
