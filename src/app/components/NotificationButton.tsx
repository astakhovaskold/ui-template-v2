import {BellOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import {memo} from 'react';

interface NotificationButtonProps {
    active?: boolean;
}

const NotificationButton = memo<NotificationButtonProps>(({active = false}): JSX.Element | null => {
    return (
        <Badge dot={active}>
            <button type="button">
                <BellOutlined className="text-2xl" />
            </button>
        </Badge>
    );
});

export default NotificationButton;
