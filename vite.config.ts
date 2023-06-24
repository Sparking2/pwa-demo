/* @type {import('vite').UserConfig} */

import {VitePWA} from 'vite-plugin-pwa'
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        VitePWA({
            // injectRegister: "script",
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}']
            },
            manifest: {
                name: "PWA - DEMO",
                short_name: "PWA",
                description: "simple app to test how to make a PWA app with vite",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: 'pwa-64x64.png',
                        sizes: '64x64',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: 'maskable-icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ]
            },
            devOptions: {
                enabled: true
            }
        })
    ]
})