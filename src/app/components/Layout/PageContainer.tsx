import React, {memo, PropsWithChildren} from 'react';
import Container from '@/app/components/Layout/Container';

interface PageContainerProps {
    title: string;
}

const PageContainer = memo<PropsWithChildren<PageContainerProps>>(({children, title}): JSX.Element | null => {
    return (
        <Container>
            <h1 className="font-h3 mb-4">{title}</h1>

            {children}
        </Container>
    );
});

export default PageContainer;
