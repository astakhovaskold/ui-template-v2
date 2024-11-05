import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {memo, PropsWithChildren, ReactNode, useCallback, useMemo} from 'react';

import useIcon from '@/app/components/PaginationTable/ActionBar/ActionButton/hooks/useIcon';
import {Action, ActionTypes} from '@/app/components/PaginationTable/types';
import {STATUS} from '@/app/modules/list/types';
import TextButton from '@/app/ui/TextButton';
import {ApiCallFn} from '@/typings/common';

interface ActionButtonProps {
    action: Action;
    listUrl: string;
    urls: Array<string>;
    icon?: ReactNode;
}

const ActionButton = memo<PropsWithChildren<ActionButtonProps>>(
    ({listUrl, urls, action, icon: iconProp, children}): JSX.Element | null => {
        const queryClient = useQueryClient();

        const icon = useIcon(action);

        const call = useMemo<ApiCallFn | undefined>(() => {
            switch (action) {
                case ActionTypes.DOWNLOAD:
                    return url => axios.get(url, {responseType: 'blob'});
                case ActionTypes.DELETE:
                    return url => axios.delete(url);

                case STATUS.CLOSED:
                case STATUS.APPROVED:
                case STATUS.PENDING:
                    return url => axios.patch(url, {status: action});

                default:
                    return undefined;
            }
        }, [action]);

        const {mutateAsync} = useMutation<unknown, unknown, string>({
            mutationFn: call ? url => call(url) : undefined,
            onSuccess: async () => {
                await queryClient.invalidateQueries({queryKey: [listUrl]});
            },
        });

        const onClick = useCallback(() => {
            if (!urls) return false;

            Promise.all(urls.map(u => mutateAsync(u)));
        }, [mutateAsync, urls]);

        return (
            <TextButton onClick={onClick} icon={iconProp ?? icon} htmlType="button">
                {children}
            </TextButton>
        );
    },
);

export default ActionButton;
