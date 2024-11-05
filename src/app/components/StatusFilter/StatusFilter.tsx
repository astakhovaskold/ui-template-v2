import React, {useCallback} from 'react';
import {Segmented, SegmentedProps} from 'antd';
import {Status, StatusFilterLabel} from '@/app/components/StatusFilter/types';
import Label from '@/app/components/StatusFilter/Label';
import useFilterPagination from '@/hooks/pagination/useFilterPagination';
import {SegmentedLabeledOption} from 'antd/es/segmented';
import {EyeOutlined} from '@ant-design/icons';

interface StatusFilterProps<T = Status> {
    url: string;
    total: number;
    value?: T;
    options: Array<SegmentedLabeledOption<T> & Omit<StatusFilterLabel, 'status'>>;
}

function StatusFilter<T = Status>({url, total, value, options}: StatusFilterProps<T>): JSX.Element | null {
    const [filter, setFilter] = useFilterPagination(url);

    const onChange: SegmentedProps<T>['onChange'] = useCallback(
        (value: T) => {
            setFilter({status: value});
        },
        [setFilter],
    );

    return (
        <Segmented<T>
            value={(value ?? filter?.status ?? undefined) as T}
            onChange={onChange}
            size="large"
            options={[
                {
                    value: undefined as T,
                    label: (
                        <Label key="all" amount={total} status={undefined}>
                            View All
                        </Label>
                    ),
                    icon: <EyeOutlined />,
                },
                ...options.map(({amount, value, title, ...option}) => ({
                    ...option,
                    value,
                    label: (
                        <Label key={title} amount={amount} status={value as Status}>
                            {title}
                        </Label>
                    ),
                })),
            ]}
        />
    );
}

export default StatusFilter;
