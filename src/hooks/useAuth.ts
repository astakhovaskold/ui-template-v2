import useAccount from '../store/account';

export function useAuth(): boolean {
    const {account} = useAccount();

    return !!account;
}
