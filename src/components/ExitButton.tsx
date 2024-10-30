import {Button} from 'antd';
import {memo, useCallback} from 'react';

import {logout} from '../store/account/accountSlice';
import {useAppDispatch} from '../store/hooks';

const ExitButton = memo((): JSX.Element | null => {
    const dispatch = useAppDispatch();

    const onExit = useCallback(() => {
        dispatch(logout({quiet: true}));
    }, [dispatch]);

    return (
        <Button danger onClick={onExit}>
            Logout
        </Button>
    );
});

export default ExitButton;
