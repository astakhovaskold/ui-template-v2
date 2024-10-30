import {Layout} from 'antd';
import {memo, useState} from 'react';

import Logo from '../Logo';
import Menu from '../Menu/Menu';

const {Sider} = Layout;

const Sidebar = memo((): JSX.Element | null => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider width={280} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <div className="pt-10 px-5 text-white overflow-hidden">
                <Logo collapsed={collapsed} />

                <Menu collapsed={collapsed} />
            </div>
        </Sider>
    );
});

export default Sidebar;
