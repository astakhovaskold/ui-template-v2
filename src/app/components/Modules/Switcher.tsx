import {AppstoreOutlined} from '@ant-design/icons';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Popover, Typography} from 'antd';
import {memo, useEffect, useMemo, useState} from 'react';

import {Link, useLocation} from 'react-router-dom';

import modules, {Module} from '../../modules';

import useAccount from '@/store/account/account';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
`;

const Item = styled(Link)<{active: 1 | 0}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    border-radius: 4px;

    ${({active}) =>
        active
            ? css`
                  background-image: linear-gradient(150deg, transparent, rgba(220, 220, 220, 0.5));
                  pointer-events: none;
              `
            : css`
                  &:hover {
                      background-image: linear-gradient(150deg, transparent, rgba(220, 220, 220, 0.5));
                  }
              `};
`;

const Img = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 12px;
`;

const {Text} = Typography;

const Switcher = memo<{module: Module}>(({module}): JSX.Element => {
    const {pathname} = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(false);
    }, [pathname]);

    const account = useAccount(state => state.account);

    const availableModules: Array<Module> = useMemo(() => {
        return modules.filter(({permissions}) => permissions.some(permission => permission === account?.user.role));
    }, [account]);

    return (
        <Popover
            visible={visible}
            onVisibleChange={setVisible}
            trigger="click"
            placement="bottomLeft"
            align={{
                offset: [6, -14],
            }}
            getPopupContainer={triggerNode => triggerNode}
            destroyTooltipOnHide
            content={
                <Content>
                    <Text strong>Change Module</Text>

                    {availableModules.map(({name, title, image}) => {
                        return (
                            <Item key={name} to={name} active={name === module.name ? 1 : 0}>
                                {typeof image === 'string' ? <Img src={image} alt={title} /> : image && image}
                                <Text>{title}</Text>
                            </Item>
                        );
                    })}
                </Content>
            }
        >
            <AppstoreOutlined />
        </Popover>
    );
});

export default Switcher;
