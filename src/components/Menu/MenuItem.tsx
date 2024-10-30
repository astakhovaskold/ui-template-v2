import {memo, PropsWithChildren, ReactNode, useContext} from 'react';
import {NavLink} from 'react-router-dom';

import Context from './Context';

interface MenuItemProps {
    href: string;
    icon?: ReactNode;
}

const MenuItem = memo<PropsWithChildren<MenuItemProps>>(({children, href, icon}): JSX.Element | null => {
    const {collapsed} = useContext(Context);

    const hasView = icon || (!collapsed && children);

    if (!hasView) return null;

    return (
        <li>
            <NavLink to={href} className="flex gap-4 py-4 px-6">
                {icon && icon}
                {children}
            </NavLink>
        </li>
    );
});

export default MenuItem;
