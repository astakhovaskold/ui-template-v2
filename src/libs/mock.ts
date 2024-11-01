import {AccountDTO, ROLES} from '@/store/types';

export const mockAccount: AccountDTO = {
    user: {
        id: 8008135,
        first_name: 'Alex',
        last_name: 'M',
        email: 'mail@example.com',
        role: ROLES.ADMIN,
    },
    access_token: '0000-0000',
    refresh_token: '0000-0000',
};
