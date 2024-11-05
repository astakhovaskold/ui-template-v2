import clsx from 'clsx';
import {memo, PropsWithChildren} from 'react';

import DynamicBreadcrumbs from '@/app/components/DynamicBreadcrumbs';
import Container from '@/app/components/Layout/Container';

interface PageContainerProps {
    title?: string;
    showBreadcrumbs?: boolean;
    className?: string;
}

const PageContainer = memo<PropsWithChildren<PageContainerProps>>(
    ({children, title, showBreadcrumbs = false, className = 'gap-y-4'}): JSX.Element | null => {
        return (
            <Container className={clsx('flex flex-col', className)}>
                {showBreadcrumbs && <DynamicBreadcrumbs current={title} />}

                {title && <h1 className="text-3xl font-semibold">{title}</h1>}

                {children}
            </Container>
        );
    },
);

export default PageContainer;
