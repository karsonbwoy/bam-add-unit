import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'bundle.js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'index.css') return 'style.css';
                    return 'assets/[name][extname]';
                },
            },
        },
    },
});