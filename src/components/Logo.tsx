import clsx from 'clsx';
import {memo} from 'react';
import {Link} from 'react-router-dom';

interface LogoProps {
    collapsed?: boolean;
}

const Logo = memo<LogoProps>(({collapsed = false}): JSX.Element | null => {
    return (
        <Link
            to="/"
            className={clsx('text-4xl text-white hover:text-white hover:opacity-90', {
                'text-center': collapsed,
            })}
        >
            {collapsed ? 'L' : 'Landmark'}
        </Link>
    );
});

export default Logo;
