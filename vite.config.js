import { defineConfig } from 'vite';
import { createAngularPlugin } from '@analogjs/vite-plugin-angular';

export default defineConfig({
    plugins: [createAngularPlugin()],
    server: {
        port: 4200, // Match Angular default port
        open: true,
    },
    build: {
        outDir: 'dist',
    },
});
