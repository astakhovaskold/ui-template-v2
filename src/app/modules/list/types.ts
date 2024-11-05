import {Common} from '@/typings/common';

export interface EntityDTO extends Common {
    name: string;
    status: STATUS;
}

export enum STATUS {
    APPROVED = 'Approved',
    PENDING = 'Pending',
    CLOSED = 'Close',
}
