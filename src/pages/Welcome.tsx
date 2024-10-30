import {Space} from 'antd';
import {memo} from 'react';

import ExitButton from '../components/ExitButton';
import {Container} from '../components/Presentation/containers';
import {useAccount} from '../hooks/useAccount';

const Welcome = memo((): JSX.Element | null => {
    const account = useAccount();

    if (!account) return null;

    const {first_name} = account.user;

    return (
        <Container>
            <Space direction="vertical">
                <h1>
                    Welcome,&nbsp;
                    {first_name}
                </h1>

                <ExitButton />
            </Space>
        </Container>
    );
});

export default Welcome;
