import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/sass/style.scss',
                'resources/assets/fontawesome/css/all.css',
                'resources/js/app.js',
                // 'resources/js/sweetalert2.min.js',
                // 'node_modules/quill/dist/quill.snow.css',
            ],
            refresh: true,
        }),
    ],
});