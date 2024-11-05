import React, {memo} from 'react';
import SearchField from '@/app/components/forms/fields/SearchField';
import API from '@/libs/API';

const Header = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9"></div>
            <div className="col-span-3">
                <SearchField url={API.purchaseOrders()} />
            </div>
        </div>
    );
});

export default Header;
