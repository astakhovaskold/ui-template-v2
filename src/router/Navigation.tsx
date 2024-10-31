import {lazy, memo, Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from 'react-router';

import {createBrowserRouter} from 'react-router-dom';

import App from '../App';

import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';

import {RouteGuard} from './RouteGuard';
import {Spin} from 'antd';

const NotFound = lazy(() => import('@/app/pages/error/NotFound'));
const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));

const PurchaseOrders = lazy(() => import('@/app/pages/PurchaseOrders'));

const Navigation = memo(() => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <>
                            <Route
                                path="/"
                                element={<App />}
                                errorElement={
                                    <Suspense fallback={<Spin spinning />}>
                                        <NotFound />
                                    </Suspense>
                                }
                            >
                                <Route element={<RouteGuard restrictedWithAuth isPublic />}>
                                    <Route path="/auth" element={<Auth />} />
                                </Route>

                                <Route element={<RouteGuard />}>
                                    <Route
                                        path="/purchase-orders"
                                        element={
                                            <Suspense fallback={<Spin spinning />}>
                                                <PurchaseOrders />
                                            </Suspense>
                                        }
                                    />
                                </Route>

                                <Route
                                    path="/unauthorized"
                                    element={
                                        <Suspense fallback={<Spin spinning />}>
                                            <Unauthorized />
                                        </Suspense>
                                    }
                                />

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
