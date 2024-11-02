import {FC, lazy, memo, Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from 'react-router';

import {createBrowserRouter} from 'react-router-dom';

import App from '../App';

import Auth from '@/app/pages/Auth';

import {RouteGuard, RouteGuardProps} from './RouteGuard';
import {Spin} from 'antd';
import Welcome from '@/app/pages/Welcome';

export type RouteItem = {
    path: string;
    title?: string;
    component: FC;
    toNav?: boolean;
    notInModule?: boolean;
} & RouteGuardProps;

const NotFound = lazy(() => import('@/app/pages/error/NotFound'));
const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));

const PurchaseOrders = lazy(() => import('@/app/pages/PurchaseOrders'));

export const routes: Array<RouteItem> = [
    {
        path: 'auth',
        component: Auth,
        restrictedWithAuth: true,
        isPublic: true,
    },
    {
        path: '/',
        component: Welcome,
    },
    {
        path: 'purchase-orders',
        title: 'Purchase Orders',
        component: PurchaseOrders,
        toNav: true,
    },
    {
        path: 'unauthorized',
        component: Unauthorized,
        isPublic: true,
    },
];

const Navigation = memo(() => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <Route
                            key="parent"
                            path="/"
                            element={<App />}
                            errorElement={
                                <Suspense fallback={<Spin spinning />}>
                                    <NotFound />
                                </Suspense>
                            }
                        >
                            {routes.map(({path, title, component: Component, ...guardProps}) => {
                                const {restrictedWithAuth, isPublic, roles} = guardProps;

                                const key = path === '/' ? path : `/${path}`;

                                const isProtected = !isPublic || restrictedWithAuth || roles;

                                const children = (
                                    <Route
                                        key={key}
                                        path={key}
                                        element={
                                            <Suspense fallback={<Spin spinning />}>
                                                <Component />
                                            </Suspense>
                                        }
                                    />
                                );

                                if (!isProtected) return children;

                                return (
                                    <Route key={key} element={<RouteGuard {...guardProps} />}>
                                        {children}
                                    </Route>
                                );
                            })}
                        </Route>,
                    ),
                )}
            />
        </Suspense>
    );
});

export default Navigation;
