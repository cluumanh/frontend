import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    console.log('MODE:', mode);
    console.log('ENV:', env);
    return {
        plugins: [react()],
        define: {
            __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
        },
        server: {
            port: 3000,
        },
    };
});
