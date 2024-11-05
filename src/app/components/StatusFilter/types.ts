import {PurchaseOrder} from '@/app/modules/purchase-orders/types';

export type Status = PurchaseOrder.STATUS | undefined;

export type StatusFilterLabel = {amount: number; status: Status};
