// vite.config.js
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel';
import path from 'path';


export default defineConfig({
    plugins: [
        babel({
            babelConfig: {
                plugins: [
                    "@babel/plugin-syntax-jsx"
                ]
            }
        }),
    ],
    optimizeDeps: {
        esbuildOptions: {
            loader: { '.js': 'jsx' }
        },
        include: [
            './src/**/*.jsx',
            './src/*.jsx',
            '*.jsx',
        ]
    },
    esbuild: {
        loader: 'jsx',
        include: [
            './src/**/*.jsx',
            './src/*.jsx',
            './*.jsx',
        ]
    }
})