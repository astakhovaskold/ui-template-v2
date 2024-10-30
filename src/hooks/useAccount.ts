import {shallowEqual} from 'react-redux';

import {useAppSelector} from '../store/hooks';
import {RootState} from '../store/types';

export function useAccount(): RootState['account'] {
    const account = useAppSelector((state: RootState) => state.account, shallowEqual);

    return account;
}
