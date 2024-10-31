declare const __VERSION__: string;
declare const __BUILD_DATE__: string;
declare const __SYSTEM__: string;
declare const __UNIQUE_STATE__: string;

declare module '*.module.scss';

declare module '*.svg' {
    import {ComponentType, SVGProps} from 'react';

    export const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;

    const value: string;

    export default value;
}
