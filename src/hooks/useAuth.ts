import useAccount from '@/store/account/account';

export function useAuth(): boolean {
    const account = useAccount(state => state.account);

    return !!account;
}
