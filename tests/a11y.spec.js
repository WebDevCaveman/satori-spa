const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

// Automated WCAG 2.1 A/AA scan (axe-core). Runs under reduced-motion so the
// designed-still nuke composes every section to opacity 1 up front — otherwise
// axe would scan sections mid-fade and skip them as transparent.
test('a11y: no WCAG 2a/2aa violations on the composed page', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/index.html');
  await page.waitForTimeout(600); // let the still-composed reveals settle

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const report = results.violations.map((v) =>
    `${v.id} (${v.impact}) — ${v.help}\n  ` +
    v.nodes.slice(0, 5).map((n) => n.target.join(' ')).join('\n  ')
  ).join('\n\n');
  expect(results.violations, report).toEqual([]);
});
