import {FlagOutlined, HomeOutlined} from '@ant-design/icons';
import {memo} from 'react';

import Context from './Context';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

interface MenuProps {
    collapsed?: boolean;
    className?: string;
}

const Menu = memo<MenuProps>(({collapsed = false, className}): JSX.Element | null => {
    return (
        <Context.Provider value={{collapsed}}>
            <nav className={className}>
                <ul>
                    <MenuSection>
                        <MenuItem href="/" icon={<HomeOutlined />}>
                            All Modules
                        </MenuItem>
                    </MenuSection>

                    <MenuSection>
                        <MenuItem href="/entities" icon={<FlagOutlined />}>
                            Entities
                        </MenuItem>
                    </MenuSection>
                </ul>
            </nav>
        </Context.Provider>
    );
});

export default Menu;
