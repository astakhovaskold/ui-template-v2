import {Button, ButtonProps} from 'antd';
import clsx from 'clsx';
import {memo} from 'react';

type TextButtonProps = Omit<ButtonProps, 'size' | 'type'>;

const TextButton = memo<TextButtonProps>(({className, children, ...props}): JSX.Element | null => {
    return (
        <Button
            {...props}
            className={clsx('text-white hover:!text-white-650 capitalize', className)}
            size="large"
            type="text"
        >
            {children}
        </Button>
    );
});

export default TextButton;
