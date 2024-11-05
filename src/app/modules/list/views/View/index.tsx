import {memo, useContext} from 'react';

import Context from '@/app/modules/list/Context';
import Status from '@/app/modules/list/views/Status';
import DescriptionList from '@/app/ui/DescriptionList';

const View = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {id, status} = item;

    return (
        <>
            <div className="flex items-center gap-x-3">
                <Status status={status} />
            </div>

            <DescriptionList
                title="Details"
                dataSource={[
                    {
                        label: '#',
                        value: id,
                    },
                ]}
            />
        </>
    );
});

export default View;
