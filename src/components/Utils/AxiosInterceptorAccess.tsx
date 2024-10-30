import axios from 'axios';
import {memo, useEffect} from 'react';

import {useAuth} from '../../hooks/useAuth';
import {logout} from '../../store/account/accountSlice';
import {useAppDispatch} from '../../store/hooks';

const AxiosInterceptorAccess = memo((): JSX.Element | null => {
    const isAuth = useAuth();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuth) {
            const interceptor = axios.interceptors.response.use(
                response => {
                    return response;
                },
                error => {
                    if (error?.response?.status === 401) {
                        dispatch(logout({quiet: true}));
                    }

                    return Promise.reject(error);
                },
            );

            return () => {
                axios.interceptors.response.eject(interceptor);
            };
        }
    }, [isAuth, dispatch]);

    return null;
});

export default AxiosInterceptorAccess;
