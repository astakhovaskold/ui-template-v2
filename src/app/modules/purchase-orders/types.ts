import {Common} from '@/typings/common';

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserDTO {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface SupplierDTO extends Common {
    title: string;
}

export namespace PurchaseOrder {
    export interface DTO extends Common {
        name: string;
        totalOrderCost: number;
        raisedBy: UserDTO['id'];
        raisedByName: UserDTO['name'];
        createdAt: Date | string;
        supplierId: SupplierDTO['id'];
        supplierName: SupplierDTO['title'];
        status: STATUS;
        statusName: string;
        orderItems: number;
    }

    export enum STATUS {
        APPROVED = 'approved',
        REJECTED = 'rejected',
        PENDING = 'pending',
        CLOSED = 'closed',
    }
}
