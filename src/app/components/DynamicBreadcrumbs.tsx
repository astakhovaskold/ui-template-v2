import {Breadcrumb} from 'antd';
import {memo, useMemo} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {routes} from '@/router/routes';

interface DynamicBreadcrumbsProps {
    showHome?: boolean;
    current?: ((item: string) => string) | string;
}

const DynamicBreadcrumbs = memo<DynamicBreadcrumbsProps>(({showHome = false, current}): JSX.Element | null => {
    const location = useLocation();

    const breadcrumbs = useMemo(() => {
        const pathnames = location.pathname.split('/').filter(x => x);

        if (pathnames.length < 2) return null;

        return pathnames.map((value, index) => {
            const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const routeName = routes.find(({path}) => path === value)?.title || value;

            const isLast = index + 1 === pathnames.length;

            // eslint-disable-next-line consistent-return
            const name = (() => {
                if (index + 1 < pathnames.length) return routeName;

                if (typeof current === 'function') return current(routeName);
                if (typeof current === 'string') return current;

                return routeName;
            })();

            return (
                <Breadcrumb.Item key={pathTo}>
                    <Link className={isLast ? '!text-black' : undefined} to={pathTo}>
                        {name}
                    </Link>
                </Breadcrumb.Item>
            );
        });
    }, [current, location.pathname]);

    return (
        <Breadcrumb>
            {showHome && (
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
            )}

            {breadcrumbs}
        </Breadcrumb>
    );
});

export default DynamicBreadcrumbs;
