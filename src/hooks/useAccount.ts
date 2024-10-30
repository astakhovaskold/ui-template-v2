import {AccountDTO} from '../entities/account/types';

export function useAccount(): AccountDTO {
    const account: AccountDTO = {
        user: {id: '0', email: 'mail@example.com', first_name: 'Alex', last_name: 'M'},
        access_token: '0000-0000',
        refresh_token: '0000-0000',
    };

    return account;
}
