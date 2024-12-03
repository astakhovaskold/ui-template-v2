// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ConfigEnv, defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default ({mode}: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), '');

    const BUILD_DATE = Date.now();
    const VERSION = env.npm_package_version;
    const APP_NAME = env.npm_package_name;

    return defineConfig({
        define: {
            __VERSION__: `"${VERSION}"`,
            __BUILD_DATE__: `"${BUILD_DATE}"`,
            __SYSTEM__: `"${APP_NAME}"`,
            __UNIQUE_STATE__: env.DEV ? '"development"' : `"${VERSION}_${BUILD_DATE}"`,
        },
        assetsInclude: ['**/*.svg'],
        plugins: [react(), svgr()],
        server: {
            port: env.PORT ? Number(env.PORT) : 3000,
            proxy: {
                '/api/v1': {
                    target: env.API_URL || 'http://localhost:3000',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        build: {
            outDir: './build',
            minify: true,
            reportCompressedSize: true,
        },
    });
};
