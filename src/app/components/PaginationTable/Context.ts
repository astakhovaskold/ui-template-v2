import {ColumnsType} from 'antd/es/table';
import {createContext} from 'react';

interface Ctx {
    url: string;
    columns: ColumnsType;
}

const Context = createContext<Ctx>({
    url: '',
    columns: [],
});

export default Context;
