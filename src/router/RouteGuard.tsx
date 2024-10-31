import {memo, useEffect, useMemo} from 'react';
import {Outlet, useLocation, useNavigate, useSearchParams} from 'react-router-dom';

import {useAuth} from '../hooks/useAuth';
import useAccount from '../store/account';

interface RouteGuardProps {
    restrictedWithAuth?: boolean;
    isPublic?: boolean;
    loggedOut?: boolean;
}

export const RouteGuard = memo<RouteGuardProps>(
    ({restrictedWithAuth = false, isPublic = false}): JSX.Element | null => {
        const isAuth = useAuth();
        const loggedOut = useAccount(state => state.loggedOut);

        const navigate = useNavigate();
        const {pathname} = useLocation();
        const [params] = useSearchParams();

        const callbackUrlParam = params.get('callbackUrl');

        const {redirect, callbackUrl} = useMemo(() => {
            if (!isPublic && !isAuth) {
                return {
                    redirect: '/auth',
                    callbackUrl: !loggedOut ? pathname : null,
                };
            }

            if (isPublic && isAuth && restrictedWithAuth) {
                return {
                    redirect: callbackUrlParam || '/',
                    callbackUrl: null,
                };
            }

            return {
                redirect: null,
                callbackUrl: null,
            };
        }, [callbackUrlParam, isAuth, isPublic, loggedOut, pathname, restrictedWithAuth]);

        useEffect(() => {
            if (redirect) {
                const search = new URLSearchParams(
                    callbackUrl
                        ? {
                              callbackUrl,
                          }
                        : '',
                );

                const hasSearch = Array.from(search.values()).length > 0;

                const [redirectPathname, redirectSearch] = redirect.split('?');

                navigate({
                    pathname: redirectPathname,
                    search: hasSearch ? `?${search.toString()}` : redirectSearch || '',
                });
            }
        }, [callbackUrl, isAuth, navigate, redirect]);

        return <Outlet />;
    },
);
