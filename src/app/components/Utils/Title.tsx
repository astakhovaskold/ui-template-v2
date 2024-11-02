import {memo, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

interface TitleProps {
    value?: string;
}

const Title = memo<TitleProps>(({value}): null => {
    const {pathname, search} = useLocation();

    useEffect(() => {
        document.title = value ? `${value} | ${__SYSTEM__}` : __SYSTEM__;
    }, [value, pathname, search]);

    return null;
});

export default Title;
