import {Layout} from 'antd';
import {memo, useState} from 'react';

import Logo from '../../Logo';
import Menu from '../Menu/Menu';

const {Sider} = Layout;

const Sidebar = memo((): JSX.Element | null => {
    return (
        <Sider className="bg-primary relative" width={280}>
            <div className="text-white overflow-hidden flex flex-col gap-y-2 sticky top-0">
                <Logo className="pt-3 px-5 pb-3" />

                <Menu className="px-1" />
            </div>
        </Sider>
    );
});

export default Sidebar;
