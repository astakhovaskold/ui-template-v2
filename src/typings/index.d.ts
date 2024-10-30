declare const _VERSION: string;
declare const _BUILD_DATE: string;
declare const _SYSTEM: string;
declare const _UNIQUE_STATE: string;

declare module '*.module.scss';

declare module '*.svg' {
    import {ComponentType, SVGProps} from 'react';

    export const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;

    const value: string;

    export default value;
}
