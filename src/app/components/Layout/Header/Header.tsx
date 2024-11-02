import {memo} from 'react';

import ProfileButton from '@/app/components/ProfileButton';
import NotificationButton from '@/app/components/NotificationButton';

const Header = memo((): JSX.Element | null => {
    return (
        <header className="min-h-16 py-2.5 px-6 border-b border-b-1 border-b-gray flex items-center justify-end">
            <div className="flex items-center gap-x-4">
                <NotificationButton />

                <ProfileButton simple />
            </div>
        </header>
    );
});

export default Header;
