import {lazy, memo, Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from 'react-router';

import {createBrowserRouter} from 'react-router-dom';

import App from '../App';

import Welcome from '../pages/Welcome';

import {RouteGuard} from './RouteGuard';

const NotFound = lazy(() => import('../pages/error/NotFound'));
const Unauthorized = lazy(() => import('../pages/error/Unauthorized'));

const Auth = lazy(() => import('../pages/Auth'));

const Users = lazy(() => import('../pages/Users'));

const Navigation = memo(() => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <>
                            <Route path="/" element={<App />} errorElement={<NotFound />}>
                                <Route element={<RouteGuard restrictedWithAuth isPublic />}>
                                    <Route path="/auth" element={<Auth />} />
                                </Route>

                                <Route element={<RouteGuard />}>
                                    <Route path="/users" element={<Users />} />
                                </Route>

                                <Route path="/unauthorized" element={<Unauthorized />} />

                                <Route element={<RouteGuard />}>
                                    <Route path="/" element={<Welcome />} />
                                </Route>
                            </Route>
                        </>,
                    ),
                )}
            />
        </Suspense>
    );
});

export default Navigation;
