import {CheckCircleOutlined, ClockCircleOutlined, FlagOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {memo} from 'react';

import SearchField from '@/app/components/PaginationTable/components/SearchField';
import {SEARCH_FIELD, STATUS_FILTER} from '@/app/components/PaginationTable/features';
import StatusFilter from '@/app/components/StatusFilter/StatusFilter';
import {STATUS} from '@/app/modules/list/types';
import FormEntity from '@/app/modules/list/views/FormEntity';
import APIMock from '@/libs/APIMock';

const Filter = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 gap-y-5 items-center">
            <div className="col-span-12">
                {STATUS_FILTER && (
                    <StatusFilter<STATUS>
                        url={APIMock.entities()}
                        total={5}
                        options={[
                            {
                                title: 'Pending',
                                value: STATUS.PENDING,
                                icon: <ClockCircleOutlined />,
                                amount: 25,
                            },
                            {
                                title: 'Approved',
                                value: STATUS.APPROVED,
                                icon: <CheckCircleOutlined />,
                                amount: 21,
                            },
                            {
                                title: 'Closed',
                                value: STATUS.CLOSED,
                                icon: <FlagOutlined />,
                                amount: 21,
                            },
                        ]}
                    />
                )}
            </div>

            <div className="col-span-9 flex items-center gap-x-2">
                <FormEntity />
            </div>

            <div className="col-span-3">{SEARCH_FIELD && <SearchField />}</div>
        </div>
    );
});

export default Filter;
