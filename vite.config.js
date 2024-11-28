import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                discography: path.resolve(__dirname, 'discography/index.html'),
                live: path.resolve(__dirname, 'live/index.html'),
            }
        }
    }
})