import {persist, createJSONStorage} from 'zustand/middleware';
import {create} from 'zustand/react';

import {AccountAction, AccountDTO, AccountState} from '@/store/account/types';

const useAccount = create(
    persist<AccountState & AccountAction>(
        set => ({
            account: undefined,
            loggedOut: false,
            auth: (account?: AccountDTO) => {
                set({account, loggedOut: false});
            },
            logout: () => {
                set({account: undefined, loggedOut: true});
            },
        }),
        {
            name: `${__UNIQUE_STATE__}_account`,
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useAccount;
