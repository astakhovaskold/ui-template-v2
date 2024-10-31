import {useMemo} from 'react';

import Utils from '../libs/Utils';
import {ROLES} from '@/store/types';
import useAccount from '@/store/account';

function useHasAccess(roles: Array<ROLES> = []): boolean {
    const account = useAccount(state => state.account);

    if (!account) return false;

    const hasAccess = useMemo<boolean>(() => {
        return Utils.hasAccess(account.user, roles);
    }, [account, roles]);

    return hasAccess;
}

export default useHasAccess;
