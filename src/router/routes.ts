import {lazy} from 'react';
import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';
import {RouteItem} from '@/router/types';

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
