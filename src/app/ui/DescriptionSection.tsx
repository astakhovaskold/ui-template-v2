import {Space, Typography} from 'antd';
import {memo, PropsWithChildren} from 'react';

interface DescriptionSectionProps {
    title: string;
}

const {Title} = Typography;

const DescriptionSection = memo<PropsWithChildren<DescriptionSectionProps>>(({title, children}): JSX.Element | null => {
    return (
        <Space direction="vertical" size={4} className="max-w-[688px]">
            <Title level={3}>{title}</Title>

            {children}
        </Space>
    );
});

export default DescriptionSection;
