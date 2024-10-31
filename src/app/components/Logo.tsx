import clsx from 'clsx';
import {memo} from 'react';
import {Link} from 'react-router-dom';

interface LogoProps {
    collapsed?: boolean;
    className?: string;
}

const Logo = memo<LogoProps>(({collapsed = false, className}): JSX.Element | null => {
    return (
        <Link
            to="/"
            className={clsx(
                'text-4xl text-white hover:text-white hover:opacity-80',
                {
                    'text-center': collapsed,
                },
                className,
            )}
        >
            <img className="h-10" src="/images/logo.png" alt="" />
        </Link>
    );
});

export default Logo;
