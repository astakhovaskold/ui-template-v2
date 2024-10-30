import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';

import axios from 'axios';

import {AccountDTO, AccountState, LoginData, LogoutData} from './types';

export function getAccountFromLS(): AccountDTO | undefined {
    const storeName = `${_UNIQUE_STATE}_account`;
    const storedAccount = localStorage.getItem(storeName);
    if (storedAccount) {
        try {
            const account: AccountDTO = JSON.parse(storedAccount);
            axios.defaults.headers.common.Authorization = `Bearer ${account.access_token}`;
            return account;
        } catch (e) {
            localStorage.removeItem(storeName);
        }
    }
}

const initialState: AccountState = {
    account: getAccountFromLS(),
    loggedOut: false,
};

export const auth = createAction<LoginData>('account/auth');
export const setAuth = createAction<AccountDTO>('account/setAuth');
export const logout = createAction<LogoutData>('account/logout');

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        login(state, action: PayloadAction<AccountDTO>) {
            state.account = action.payload;
            state.loggedOut = false;
        },
    },
    extraReducers: builder => {
        builder.addCase(logout, state => {
            state.account = undefined;
            state.loggedOut = true;
        });
    },
});

export const {login} = accountSlice.actions;

export default accountSlice.reducer;
