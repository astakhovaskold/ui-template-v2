import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';

import accountReducer from './account/accountSlice';
import rootSaga from './rootSaga';

let t = 0;

const sagaMiddleware: SagaMiddleware = createSagaMiddleware({
    onError(error) {
        clearTimeout(t);

        t = window.setTimeout(() => {
            // errorInfo - stack of saga

            // eslint-disable-next-line no-console
            console.error(error);
            // eslint-disable-next-line no-console
            console.warn('RESTART SAGA');
            sagaMiddleware.run(rootSaga);
        }, 1000);
    },
});

export const store = configureStore({
    reducer: {
        account: accountReducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
