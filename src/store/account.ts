import {create} from 'zustand/react';

import {AccountDTO, AccountState} from '../entities/account/types';

const useAccount = create<AccountState>(set => ({
    account: undefined,
    loggedOut: false,
    setAccount: (account?: AccountDTO) => set({account}),
}));

export default useAccount;
