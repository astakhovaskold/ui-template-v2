import {createContext} from 'react';

interface Ctx {
    collapsed?: boolean;
}

const Context = createContext<Ctx>({
    collapsed: false,
});

export default Context;
