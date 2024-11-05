import {DownOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {Avatar, Button, Col, Divider, Popover, Row, Space, Typography} from 'antd';
import {memo, useMemo} from 'react';
import {Link} from 'react-router-dom';

import useAccount from '@/store/account/account';

interface ProfileButtonProps {
    simple?: boolean;
}

const {Title, Text} = Typography;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;

    & .ant-divider-horizontal {
        margin: 0.75rem 0;
        margin-left: -1rem;
        width: calc(100% + 2rem); //don't ask why
    }
`;

const UserInfo = styled.div`
    margin-left: 1rem;
    line-height: 1;
`;

const ProfileButton = memo<ProfileButtonProps>(({simple = false}): JSX.Element | null => {
    const {account, logout} = useAccount(state => state);

    const logoutButton = useMemo(
        () => (
            <Button onClick={logout} type="text" block className="justify-start">
                <LogoutOutlined />
                Log out
            </Button>
        ),
        [logout],
    );

    return (
        <Popover
            content={
                <>
                    {simple ? (
                        <Row align="middle" justify="end" gutter={8} wrap={false}>
                            <Col className="w-40">{logoutButton}</Col>
                        </Row>
                    ) : (
                        <Content>
                            <Title level={4}>Profile</Title>

                            <Divider />

                            <Row align="middle">
                                <Avatar shape="square" icon={<UserOutlined />} />

                                <UserInfo>
                                    <Text className="text-gray">{account?.user.first_name}</Text>

                                    <br />

                                    <Text type="secondary">{account?.user.email}</Text>
                                </UserInfo>
                            </Row>

                            <Divider />

                            <Row align="middle" justify="end" gutter={8} wrap={false}>
                                <Col>
                                    <Link to="change-password">Change pasword</Link>
                                </Col>

                                <Col>{logoutButton}</Col>
                            </Row>
                        </Content>
                    )}
                </>
            }
            align={{
                offset: [5, -10],
            }}
            trigger="hover"
            placement="bottomLeft"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.2}
        >
            <Space align="start" size={4}>
                <Space className="text-xs leading-5" direction="vertical" size={4}>
                    <Text className="flex items-center text-black font-semibold">
                        {account?.user.first_name}
                        &nbsp;
                        {account?.user.last_name}
                    </Text>

                    <Text type="secondary">{account?.user.id}</Text>
                </Space>

                <DownOutlined />
            </Space>
        </Popover>
    );
});

export default ProfileButton;
