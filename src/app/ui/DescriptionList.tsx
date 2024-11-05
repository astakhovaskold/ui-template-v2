import {QuestionCircleOutlined} from '@ant-design/icons';
import {List, Space, Tooltip, Typography} from 'antd';

import {memo, ReactNode} from 'react';

interface DescriptionListProps {
    title?: string;
    dataSource: Array<{label: string; value: ReactNode; tip?: string}>;
}

const {Text, Title} = Typography;
const {Item} = List;

const DescriptionList = memo<DescriptionListProps>(({dataSource, title}): JSX.Element | null => {
    return (
        <Space direction="vertical" size={4} className="max-w-[688px]">
            {title && (
                <Title className="!m-0" level={3}>
                    {title}
                </Title>
            )}

            <List
                itemLayout="horizontal"
                dataSource={dataSource}
                renderItem={({label, value, tip}) => {
                    return (
                        <Item className="font-normal">
                            <div className="grid grid-cols-12 gap-x-20">
                                <div className="col-span-4">
                                    <div className="flex gap-x-2">
                                        <Text className="text-base" strong>
                                            {label}
                                        </Text>

                                        {tip && (
                                            <Tooltip arrow placement="right" title={tip}>
                                                <QuestionCircleOutlined className="text-gray" />
                                            </Tooltip>
                                        )}
                                    </div>
                                </div>

                                <div className="col-span-8 text-base">{value}</div>
                            </div>
                        </Item>
                    );
                }}
            />
        </Space>
    );
});

export default DescriptionList;
