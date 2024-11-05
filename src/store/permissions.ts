import {ROLES} from '@/store/account/types';

export const ENTITY_MANAGE = [ROLES.ADMIN];
export const ENTITY_VIEW = ENTITY_MANAGE;

export const ENTITY_MODULE = Array.from(new Set([...ENTITY_VIEW]));
