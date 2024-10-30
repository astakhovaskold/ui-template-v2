import {UserOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {Avatar, Button, Col, Divider, Popover, Row, Typography} from 'antd';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import {useAccount} from '../hooks/useAccount';

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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    flex-shrink: 0;
    font-size: 20px;
    color: #fff;

    &:hover {
        background-color: var(--main-color);
    }
`;

const UserInfo = styled.div`
    margin-left: 1rem;
    line-height: 1;
`;

const ProfileButton = memo((): JSX.Element | null => {
    const account = useAccount();

    return (
        <Popover
            content={
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

                        <Col>
                            <Button type="primary">Log out</Button>
                        </Col>
                    </Row>
                </Content>
            }
            align={{
                offset: [5, -10],
            }}
            trigger="hover"
            placement="bottomLeft"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.2}
        >
            <Container>
                <UserOutlined className="text-black" />
            </Container>
        </Popover>
    );
});

export default ProfileButton;
