import {memo} from 'react';

import Context from './Context';
import MenuItem from './MenuItem';

interface MenuProps {
    collapsed?: boolean;
}

const Menu = memo<MenuProps>(({collapsed = false}): JSX.Element | null => {
    return (
        <Context.Provider value={{collapsed}}>
            <nav>
                <ul>
                    <MenuItem href="/users">Users</MenuItem>
                </ul>
            </nav>
        </Context.Provider>
    );
});

export default Menu;
