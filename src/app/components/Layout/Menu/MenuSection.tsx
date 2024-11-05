import {memo, PropsWithChildren} from 'react';

const MenuSection = memo<PropsWithChildren>(({children}): JSX.Element | null => {
    return (
        <li>
            <ul className="py-2 border-t border-t-menu-item-hover">{children}</ul>
        </li>
    );
});

export default MenuSection;
