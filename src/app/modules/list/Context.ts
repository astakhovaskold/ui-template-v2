import {createContext} from 'react';

import {EntityDTO} from '@/app/modules/list/types';

interface Ctx {
    item?: EntityDTO;
}

const Context = createContext<Ctx | null>(null);

export default Context;
