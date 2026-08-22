import { test, expect } from '@playwright/test'

async function authenticate(page) {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('portfolioAuth', 'authenticated')
  })
}

async function gotoWexCaseStudy(page) {
  await authenticate(page)
  await page.goto('/')
  // Navigate through the real SPA route (authenticated, so no modal).
  await page.getByRole('button', { name: /WEX|Mobility|innovation/i }).first().click()
  await page.waitForURL(/innovation-transformation-WEX/)
  await expect(page.locator('.timeline')).toBeVisible()
}

test.describe('ActivityTimeline scroll-linked index', () => {
  test('all phases render in the flow (no duplicate rendering)', async ({ page }) => {
    await gotoWexCaseStudy(page)
    const panels = page.locator('.timeline-panel')
    const indexItems = page.locator('.timeline-index-item')
    await expect(panels).toHaveCount(5)
    await expect(indexItems).toHaveCount(5)
  })

  test('the index highlights the phase in the reading zone as you scroll', async ({ page }) => {
    await gotoWexCaseStudy(page)

    const first = page.locator('.timeline-index-item').first()
    await expect(first).toHaveClass(/active/)

    // Scroll the last panel into the reading zone.
    await page.locator('.timeline-panel').last().scrollIntoViewIfNeeded()

    await expect(page.locator('.timeline-index-item').last()).toHaveClass(/active/, {
      timeout: 4000
    })
    // The formerly-active first item should no longer be active.
    await expect(first).not.toHaveClass(/active/)
  })

  test('clicking an index item jumps to that phase and marks it current', async ({ page }) => {
    await gotoWexCaseStudy(page)

    const targetIndex = page.locator('.timeline-index-item').nth(3)
    await targetIndex.click()

    await expect(targetIndex).toHaveAttribute('aria-current', 'true')

    // The corresponding panel's heading should be at/near the top reading area.
    const panel = page.locator('.timeline-panel').nth(3)
    await expect.poll(async () => {
      const box = await panel.boundingBox()
      return box ? Math.round(box.y) : 9999
    }, { timeout: 4000, message: 'target panel should be near the top' }).toBeLessThan(160)
  })

  test('exactly one phase is current at a time', async ({ page }) => {
    await gotoWexCaseStudy(page)
    await page.locator('.timeline-panel').nth(2).scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page.locator('.timeline-index-item.active')).toHaveCount(1)
    await expect(page.locator('.timeline-index-item[aria-current="true"]')).toHaveCount(1)
  })
})
