import {useQuery} from '@tanstack/react-query';
import {Spin} from 'antd';
import {memo} from 'react';
import {useParams} from 'react-router-dom';

import Context from '@/app/modules/list/Context';
import {EntityDTO} from '@/app/modules/list/types';
import View from '@/app/modules/list/views/View';
import API from '@/libs/API';

interface PageProps {}

const Page = memo<PageProps>((): JSX.Element | null => {
    const {id} = useParams() as {id: string};

    const {data: item, isLoading} = useQuery<EntityDTO>({queryKey: [API.entities(id)]});

    return (
        <Context.Provider value={{item}}>
            <Spin size="large" spinning={isLoading}>
                <View />
            </Spin>
        </Context.Provider>
    );
});

export default Page;
