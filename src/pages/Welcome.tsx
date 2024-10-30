import {Space} from 'antd';
import {memo} from 'react';

import {useAccount} from '../hooks/useAccount';

const Welcome = memo((): JSX.Element | null => {
    const account = useAccount();

    if (!account) return null;

    const {first_name} = account.user;

    return (
        <Space direction="vertical">
            <h1 className="font-h2">
                Welcome,&nbsp;
                {first_name}
            </h1>
        </Space>
    );
});

export default Welcome;
