import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to replace environment variables in HTML
function htmlEnvReplace() {
  return {
    name: 'html-env-replace',
    transformIndexHtml(html) {
      return html.replace(/%VITE_GTM_CONTAINER_ID%/g, process.env.VITE_GTM_CONTAINER_ID || '')
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlEnvReplace()],
  base: '/portfolio25/',
})
