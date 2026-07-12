const { defineConfig, devices } = require('@playwright/test');

// Cross-browser checks for the SATORI static prototype.
// Serves index.html and exercises it in Chromium, Firefox, and WebKit (Safari engine)
// — the engines where the sticky scroll sequences, muted-video autoplay, and WebAudio
// (flagged as risks in SATORI Handoff.md) are most likely to diverge.
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list']],
  timeout: 30000,
  expect: { timeout: 15000 },
  use: {
    baseURL: 'http://localhost:8753',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'python3 -m http.server 8753',
    url: 'http://localhost:8753/index.html',
    reuseExistingServer: true,
    timeout: 20000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
