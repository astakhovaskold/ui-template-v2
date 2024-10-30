import {Button} from 'antd';
import {memo, useCallback} from 'react';

const ExitButton = memo((): JSX.Element | null => {
    const onExit = useCallback(() => {
        // dispatch(logout({quiet: true}));
    }, []);

    return (
        <Button danger onClick={onExit}>
            Logout
        </Button>
    );
});

export default ExitButton;
