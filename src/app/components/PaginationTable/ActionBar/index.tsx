import {CloseOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import clsx from 'clsx';
import {memo, PropsWithChildren, useRef} from 'react';
import {createPortal} from 'react-dom';

import useClickAway from '@/hooks/useClickAway';

interface ActionBarProps {
    open?: boolean;
    onClose: () => void;
}

const ActionBar = memo<PropsWithChildren<ActionBarProps>>(({open = false, onClose, children}): JSX.Element | null => {
    const ref = useRef<HTMLElement | null>(null);

    useClickAway(
        ref,
        () => {
            onClose();
        },
        ['click'],
        2000,
    );

    return createPortal(
        <section
            ref={ref}
            className={clsx(
                'w-[100vw] py-3 px-6 flex items-center justify-between rounded-t-lg fixed bottom-0 bg-black text-white transition-transform duration-200',
                {
                    'translate-y-0': open,
                    'translate-y-[4rem]': !open,
                },
            )}
        >
            <div className="flex items-center gap-x-2">{children}</div>

            <Button
                className="text-white hover:!text-white-650"
                type="text"
                onClick={onClose}
                icon={<CloseOutlined />}
            />
        </section>,
        document.body,
    );
});

export default ActionBar;
