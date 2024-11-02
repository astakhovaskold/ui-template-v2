import {lazy} from 'react';
import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';
import {RouteItem} from '@/router/types';

const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));
const PurchaseOrders = lazy(() => import('@/app/pages/PurchaseOrders'));
const MassUpload = lazy(() => import('@/app/pages/MassUpload'));

const modules: Array<RouteItem> = [
    {
        path: 'purchase-orders',
        title: 'Purchase Orders',
        component: PurchaseOrders,
        toNav: true,
    },
    {
        path: 'mass-upload',
        title: 'Mass Upload',
        component: MassUpload,
        toNav: true,
    },
];

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
    ...modules,
    {
        path: 'unauthorized',
        component: Unauthorized,
        isPublic: true,
    },
];
