import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: false, // <-- Only set to true if needed (e.g. WSL, Docker)
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/bin/**',
        '**/obj/**',
        '**/.vs/**',
        '**/coverage/**',
        '**/.vscode/**'
      ]
    }
  },
  plugins: [react(), mkcert()]
})
