import {nanoid, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {SagaIterator} from 'redux-saga';
import {call, Effect, putResolve, takeEvery, takeLeading} from 'redux-saga/effects';

import API from '../../libs/API';

import {login} from './accountSlice';
import {AccountDTO, LoginData, LogoutData, TYPES} from './types';

function* setAuthData(account: AccountDTO) {
    axios.defaults.headers.common.Authorization = `Bearer ${account.access_token}`;
    yield putResolve(login(account));
}

function* requestLogin(action: PayloadAction<LoginData>): SagaIterator {
    const {payload} = action;

    try {
        const {data: token}: AxiosResponse<AccountDTO> = yield call(axios.post, API.auth('login'), payload);

        const account: AccountDTO = {
            ...token,
            user: {
                id: nanoid(),
                first_name: 'John',
                last_name: 'Doe',
                email: 'johndoe@mail.com',
            },
        };

        yield* setAuthData(account);
    } catch (e) {
        // noop
    }
}

function* updateStorage(action: PayloadAction<AccountDTO> | PayloadAction<LogoutData>): SagaIterator {
    const storeName = `${_UNIQUE_STATE}_account`;

    switch (action.type) {
        case TYPES.LOGIN:
            localStorage.setItem(storeName, JSON.stringify(action.payload));
            break;

        case TYPES.LOGOUT:
            localStorage.removeItem(storeName);
            break;
    }
}

function* requestLogout({payload}: PayloadAction<LogoutData>): SagaIterator {
    const quiet = payload?.quiet ?? false;
    try {
        if (!quiet) {
            yield call(axios.post, API.auth('logout'), {});
        }
    } catch (e) {
        // noop
    } finally {
        delete axios.defaults.headers.common.Authorization;
    }
}

const accountSagas: Array<Effect> = [
    takeLeading(TYPES.AUTH, requestLogin),
    takeEvery([TYPES.LOGIN, TYPES.LOGOUT], updateStorage),
    takeLeading(TYPES.LOGOUT, requestLogout),
    takeEvery(TYPES.SET_AUTH, function* ({payload}: PayloadAction<AccountDTO>) {
        yield setAuthData(payload);
    }),
];

export default accountSagas;
