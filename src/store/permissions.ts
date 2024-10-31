import {ROLES} from '@/store/types';

export const PO_MANAGE = [ROLES.ADMIN];
export const PO_VIEW = PO_MANAGE;

export const PO_MODULE = Array.from(new Set([...PO_VIEW]));
