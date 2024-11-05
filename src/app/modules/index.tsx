import {FlagOutlined} from '@ant-design/icons';
import {ReactNode} from 'react';

import {ROLES} from '@/store/account/types';
import {ENTITY_MODULE} from '@/store/permissions';

export interface Module {
    name: string;
    title: string;
    image: ReactNode;
    permissions: Array<ROLES>;
    isNew?: boolean;
}

const modules: Array<Module> = [
    {
        name: 'entities',
        title: 'Entities',
        permissions: ENTITY_MODULE,
        isNew: true,
        image: <FlagOutlined />,
    },
];

export default modules;
