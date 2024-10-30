import {memo} from 'react';

import ProfileButton from '../ProfileButton';

const Header = memo((): JSX.Element | null => {
    return (
        <header className="min-h-20 border-b border-b-1 border-b-gray grid grid-cols-12 items-center">
            <div className="col-start-11">
                <ProfileButton />
            </div>
        </header>
    );
});

export default Header;
