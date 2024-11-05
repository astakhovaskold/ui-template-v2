import MirageJs from 'miragejs';

import {nanoid} from 'nanoid';

import {PaginationResult} from '@/app/components/PaginationTable/types';
import {EntityDTO, STATUS} from '@/app/modules/list/types';
import {randomUppercase} from '@/libs/generate';
import {AccountDTO, ROLES, UserDTO} from '@/store/account/types';

export const MOCK_EMAIL = 'user@example.com';
export const MOCK_PASSWORD = '12345678';

export const generatedAccount: AccountDTO = {
    user: {
        id: nanoid(),
        first_name: 'Alex',
        last_name: 'M',
        email: MOCK_EMAIL,
        role: ROLES.ADMIN,
        avatar: `https://source.unsplash.com/100x100/?men,${nanoid()}`,
    },
    access_token: '0000-0000',
    refresh_token: '0000-0000',
};

export const generatedUserList: Array<UserDTO> = [
    {id: nanoid(), email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe', role: ROLES.ADMIN},
    {id: nanoid(), email: 'jane.smith@example.com', first_name: 'Jane', last_name: 'Smith', role: ROLES.OBSERVER},
    {
        id: nanoid(),
        email: 'michael.johnson@example.com',
        first_name: 'Michael',
        last_name: 'Johnson',
        role: ROLES.OPERATOR,
    },
    {
        id: nanoid(),
        email: 'emily.davis@example.com',
        first_name: 'Emily',
        last_name: 'Davis',
        role: ROLES.SECURITY_ADMIN,
    },
    {id: nanoid(), email: 'david.miller@example.com', first_name: 'David', last_name: 'Miller', role: ROLES.ADMIN},
    {id: nanoid(), email: 'olivia.wilson@example.com', first_name: 'Olivia', last_name: 'Wilson', role: ROLES.OBSERVER},
    {
        id: nanoid(),
        email: 'daniel.anderson@example.com',
        first_name: 'Daniel',
        last_name: 'Anderson',
        role: ROLES.OPERATOR,
    },
    {
        id: nanoid(),
        email: 'matthew.taylor@example.com',
        first_name: 'Matthew',
        last_name: 'Taylor',
        role: ROLES.SECURITY_ADMIN,
    },
    {id: nanoid(), email: 'sarah.brown@example.com', first_name: 'Sarah', last_name: 'Brown', role: ROLES.ADMIN},
    {id: nanoid(), email: 'james.nelson@example.com', first_name: 'James', last_name: 'Nelson', role: ROLES.OBSERVER},
];

export const generatedEntityList = (request: MirageJs.Request): PaginationResult<Partial<EntityDTO>> => ({
    content: [
        {
            id: nanoid(),
            name: randomUppercase(),
            status: STATUS.APPROVED,
        },
        {
            id: nanoid(),
            name: randomUppercase(),
            status: STATUS.PENDING,
        },
        {
            id: nanoid(),
            name: randomUppercase(),
            status: STATUS.CLOSED,
        },
    ],
    totalElements: 10,
    totalPages: request.queryParams.size ? Math.ceil(10 / +request.queryParams.size) : 1,
});

export const generatedEntityItem: Partial<EntityDTO> = {
    id: nanoid(),
    name: randomUppercase(),
    status: STATUS.APPROVED,
};
