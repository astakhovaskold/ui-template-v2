import clsx from 'clsx';
import {memo} from 'react';
import {Link} from 'react-router-dom';

interface LogoProps {
    title: string;
    url?: string;
    collapsed?: boolean;
    className?: string;
}

const Logo = memo<LogoProps>(({title, url, collapsed = false, className}): JSX.Element | null => {
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
            {url ? (
                <img className="h-10" src="/images/logo.png" alt={title} />
            ) : (
                <span className="text-white text-2xl font-bold">{title}</span>
            )}
        </Link>
    );
});

export default Logo;
