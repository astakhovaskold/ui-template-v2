import {lazy} from 'react';

import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';
import {RouteItem} from '@/router/types';

const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));
const PurchaseOrdersList = lazy(() => import('@/app/modules/list/List'));
const PurchaseOrdersPage = lazy(() => import('@/app/modules/list/Page'));

const modules: Array<RouteItem> = [
    {
        path: 'entities',
        title: 'Entities',
        component: PurchaseOrdersList,
        toNav: true,
    },
    {
        path: 'entities/:id',
        title: 'Entity',
        component: PurchaseOrdersPage,
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
    {
        path: 'unauthorized',
        component: Unauthorized,
        isPublic: true,
    },

    ...modules,
];
