import {Spin} from 'antd';
import {lazy, memo, Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from 'react-router';

import {createBrowserRouter} from 'react-router-dom';

import App from '../App';

import {RouteGuard} from './RouteGuard';

import {routes} from '@/router/routes';

const NotFound = lazy(() => import('@/app/pages/error/NotFound'));

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
                                    <Route key={key} element={<RouteGuard title={title} {...guardProps} />}>
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
