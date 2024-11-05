import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';

import Utils from '../libs/Utils';

import modules, {Module} from '@/app/modules';
import {routes} from '@/router/routes';
import {RouteItem} from '@/router/types';
import useAccount from '@/store/account/account';

function useModuleLinks(forModule = false): [Array<RouteItem>, Module] {
    const account = useAccount(state => state.account);
    const {pathname} = useLocation();

    const module = useMemo(() => {
        return modules.find(({name}) => pathname.startsWith(`/${name}`))!;
    }, [pathname]);

    const links = useMemo(() => {
        return routes
            .filter(({path}) => path === module?.name)
            .filter(({toNav, notInModule}) => toNav && (!forModule || (forModule && !notInModule)))
            .filter(({roles}) => account && Utils.hasAccess(account.user, roles));
    }, [account, module, forModule]);

    return [links, module];
}

export default useModuleLinks;
