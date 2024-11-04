export type chunks = Array<unknown>;

export default class API {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {}

    protected static get version() {
        return 1;
    }

    protected static get PREFIX_API() {
        return '/api';
    }

    protected static get PREFIX_VERSION() {
        return `/v${this.version}`;
    }

    protected static get api() {
        return `${this.PREFIX_API}${this.PREFIX_VERSION}`;
    }

    protected static joinChunks(...chunks: chunks): string {
        const suffix = chunks.join('/');
        return suffix.length ? `/${suffix}` : '';
    }

    // app
    static auth(): string;
    static auth(chunk: 'login' | 'logout' | 'refresh-token' | 'profile'): string;
    static auth(...chunks: chunks): string {
        const prefix = '/auth';
        return `${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }

    static users(): string;
    static users(id: string, command?: 'profile'): string;
    static users(...chunks: chunks): string {
        const prefix = '/users';
        return `${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }

    static purchaseOrders(): string;
    static purchaseOrders(id: string, command?: 'profile'): string;
    static purchaseOrders(...chunks: chunks): string {
        const prefix = '/purchase-orders';
        return `${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }
}
