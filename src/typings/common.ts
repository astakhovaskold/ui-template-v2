import {Dayjs} from 'dayjs';

import {STATUS} from '@/app/modules/list/types';

export interface Common {
    readonly id: string;
}

export type CommonDate = Date | Dayjs | string;

export interface PasswordData {
    password: string;
    confirmPassword: string;
}

export type Status = STATUS;

export type ApiCallFn = (url: string) => Promise<unknown>;
