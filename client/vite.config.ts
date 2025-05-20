import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: true,
      interval: 1000, // checks for file changes every 1000ms
      ignored: ['**/node_modules/**', '**/.git/**']
    }
  },
  plugins: [react(), mkcert()]
})
