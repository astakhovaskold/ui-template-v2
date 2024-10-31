import PoManagement from '/public/images/logo.png';
import {ROLES} from '@/store/types';
import {PO_MODULE} from '@/store/permissions';

export interface Module {
    name: string;
    title: string;
    image: string;
    permissions: Array<ROLES>;
    isNew?: boolean;
}

const modules: Array<Module> = [
    {
        name: 'purchase-orders',
        title: 'Purchase Order Management',
        image: PoManagement,
        permissions: PO_MODULE,
        isNew: true,
    },
];

export default modules;
