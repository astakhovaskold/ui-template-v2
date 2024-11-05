import {useMemo} from 'react';

import Utils from '../libs/Utils';

import useAccount from '@/store/account/account';
import {ROLES} from '@/store/account/types';

function useHasAccess(roles: Array<ROLES> = []): boolean {
    const account = useAccount(state => state.account);

    const hasAccess = useMemo<boolean>(() => {
        return account ? Utils.hasAccess(account.user, roles) : false;
    }, [account, roles]);

    return hasAccess;
}

export default useHasAccess;
