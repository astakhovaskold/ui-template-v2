import {FC} from 'react';

import {RouteGuardProps} from '@/router/RouteGuard';

export type RouteItem = {
    path: string;
    title?: string;
    component: FC;
    toNav?: boolean;
    notInModule?: boolean;
} & RouteGuardProps;
