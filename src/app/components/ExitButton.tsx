import {Button} from 'antd';
import {memo, useCallback} from 'react';
import useAccount from '@/store/account';

const ExitButton = memo((): JSX.Element | null => {
    const logout = useAccount(state => state.logout);

    const onExit = useCallback(() => {
        logout();
    }, [logout]);

    return (
        <Button danger onClick={onExit}>
            Log out
        </Button>
    );
});

export default ExitButton;
