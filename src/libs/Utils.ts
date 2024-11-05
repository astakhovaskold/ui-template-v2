import {RcFile} from 'antd/es/upload';

import {ROLES, UserDTO} from '@/store/account/types';

export default class Utils {
    static hasAccess(user: UserDTO, roles: Array<ROLES> = []): boolean {
        return user && (roles.length === 0 || roles.some(role => role === user.role));
    }

    static getBase64 = <T = RcFile>(file: T, callback: (url: string) => void): void | boolean => {
        if (!(file instanceof Blob)) return false;

        const objectURL = URL.createObjectURL(file);

        callback(objectURL);
    };

    static getURLFromBuffer = (buffer: ArrayBuffer, type: string) => {
        const arrayBufferView = new Uint8Array(buffer);

        const blob = new Blob([arrayBufferView], {type});
        const url = URL.createObjectURL(blob);

        return url;
    };

    static isLargerThanMB = (file: RcFile, limit: number): boolean => {
        return file.size / 1024 / 1024 < limit;
    };

    static isAcceptAllowed = (file: RcFile): boolean => {
        const accept = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm'];
        return accept.includes(file.type);
    };

    static on<T extends Window | Document | HTMLElement | EventTarget>(
        obj: T | null,
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...args: Parameters<T['addEventListener']> | [string, Function | null, ...Array<unknown>]
    ): void {
        if (obj && obj.addEventListener) {
            obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
        }
    }

    static off<T extends Window | Document | HTMLElement | EventTarget>(
        obj: T | null,
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...Array<unknown>]
    ): void {
        if (obj && obj.removeEventListener) {
            obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
        }
    }

    static currencyFormat = (number: number, currency: string, fraction = false, locale = 'gb') =>
        number.toLocaleString(locale, {
            style: 'currency',
            currency,
            currencyDisplay: 'code',
            localeMatcher: 'best fit',
            minimumFractionDigits: 0,
            maximumFractionDigits: fraction ? 2 : 0,
        });

    static isBrowser = typeof window !== 'undefined';

    static isNavigator = typeof navigator !== 'undefined';

    static getFileExtension(filename: string) {
        const parts = filename.split('.');
        if (parts.length > 1) {
            return '.' + parts.pop()?.toLowerCase();
        }
        return '';
    }
}
