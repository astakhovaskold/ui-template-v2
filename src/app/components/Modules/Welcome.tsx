import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {Card, Col, Row} from 'antd';
import {memo, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import useModuleLinks from '@/hooks/useModuleLinks';

const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    & .ant-card {
        color: unset;
        overflow: hidden;
    }
`;

const Welcome = memo((): JSX.Element => {
    const [links] = useModuleLinks(true);
    const [first] = links;
    const navigate = useNavigate();

    useEffect(() => {
        if (first?.path) {
            navigate(first.path, {
                replace: true,
            });
        }
    }, [navigate, first]);

    return (
        <Row wrap={false} gutter={32}>
            <Col span={2}>
                <Link to="..">
                    <LeftOutlined />
                    Назад
                </Link>
            </Col>

            <Col span={10}>
                {links.map(({path, title}) => (
                    <CardLink key={path} to={path}>
                        <Card size="small" type="inner" hoverable>
                            <Row align="middle" wrap={false}>
                                <Col flex="auto">{title}</Col>

                                <Col>
                                    <RightOutlined />
                                </Col>
                            </Row>
                        </Card>
                    </CardLink>
                ))}
            </Col>
        </Row>
    );
});

export default Welcome;
