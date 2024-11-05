/**
 * Created by ASTAKHOV A.A. on 25.08.2023
 */

import {ThemeConfig} from 'antd';

const themeConfig: ThemeConfig = {
    token: {
        fontSize: 14,
        fontFamily: 'SF Pro Text, sans-serif',
        colorPrimary: '#061178',
        colorTextSecondary: 'rgba(0, 0, 0, 0.25)',
    },
    components: {
        Table: {
            cellPaddingBlock: 20,
            cellPaddingInline: 16,
            rowSelectedBg: '#FFFFFF',
            rowSelectedHoverBg: '#FAFAFA',
        },
        Layout: {
            bodyBg: '#FFFFFF',
        },
        Button: {
            primaryShadow: 'none',
        },
    },
};

export default themeConfig;
