import {useAccount} from './useAccount';

export function useAuth(): boolean {
    const {account} = useAccount();

    return !!account;
}
