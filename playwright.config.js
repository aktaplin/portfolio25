import { defineConfig, devices } from '@playwright/test'

// Serves a production build on 4173 and runs the e2e suite against it.
// Using `preview` (not `dev`) so the tests exercise the real bundle with no
// HMR in the loop — the environment scroll restoration actually ships in.
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4173/portfolio25/',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173/portfolio25/',
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
})
