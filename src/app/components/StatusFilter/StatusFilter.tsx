import {EyeOutlined} from '@ant-design/icons';
import {Segmented, SegmentedProps} from 'antd';
import {SegmentedLabeledOption} from 'antd/es/segmented';
import {useCallback, useMemo} from 'react';

import Label from '@/app/components/StatusFilter/Label';
import {StatusFilterLabel} from '@/app/components/StatusFilter/types';
import useFilterPagination from '@/hooks/pagination/useFilterPagination';
import {Status} from '@/typings/common';

interface StatusFilterProps<T = Status> {
    url: string;
    total: number;
    value?: T;
    options: Array<SegmentedLabeledOption<T> & Omit<StatusFilterLabel, 'status'>>;
}

function StatusFilter<T = Status>({url, total, value, options}: StatusFilterProps<T>): JSX.Element | null {
    const [filter, setFilter] = useFilterPagination(url);

    const onChange: SegmentedProps<T>['onChange'] = useCallback(
        (status: T) => {
            setFilter({status});
        },
        [setFilter],
    );

    const optionsFiltered = useMemo(
        () =>
            options
                .filter(({amount}) => Number.isFinite(amount) && amount > 0)
                .map(({amount, value: status, title, ...option}) => ({
                    ...option,
                    value: status,
                    label: (
                        <Label amount={amount} status={status as Status}>
                            {title}
                        </Label>
                    ),
                })),
        [options],
    );

    return (
        <Segmented<T>
            value={(value ?? filter?.status ?? undefined) as T}
            onChange={onChange}
            className="text-black"
            size="large"
            options={[
                {
                    value: undefined as T,
                    label: (
                        <Label amount={total} status={undefined}>
                            View All
                        </Label>
                    ),
                    icon: <EyeOutlined />,
                },
                ...optionsFiltered,
            ]}
        />
    );
}

export default StatusFilter;
