import {memo, useEffect, useMemo} from 'react';
import {Outlet, useLocation, useNavigate, useSearchParams} from 'react-router-dom';

// import useHasAccess from '@/hooks/useHasAccess';
import {ROLES} from '@/store/account/types';
import {useAuth} from '@/hooks/useAuth';
import useAccount from '@/store/account/account';

export interface RouteGuardProps {
    restrictedWithAuth?: boolean;
    isPublic?: boolean;
    roles?: Array<ROLES>;
}

export const RouteGuard = memo<RouteGuardProps>(
    ({restrictedWithAuth = false, isPublic = false, roles}): JSX.Element | null => {
        const isAuth = useAuth();
        const loggedOut = useAccount(state => state.loggedOut);

        const navigate = useNavigate();
        const {pathname} = useLocation();
        const [params] = useSearchParams();

        // const hasAccess = useHasAccess(roles);

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

            // if (isAuth && !hasAccess) {
            //     return {
            //         redirect: '/unauthorized',
            //         callbackUrl: null,
            //     };
            // }

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

                const hasSearch = !!Array.from(search.values())?.length;

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
