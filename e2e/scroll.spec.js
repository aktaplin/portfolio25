import { test, expect } from '@playwright/test'

// The case study routes are password-gated. Authenticate the way the app does
// — the AuthProvider reads sessionStorage('portfolioAuth') on mount — so card
// clicks navigate directly instead of opening the modal. This is a test
// fixture for the routes we're exercising, not the scroll logic itself.
async function authenticate(page) {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('portfolioAuth', 'authenticated')
  })
}

const wexCard = (page) =>
  page.getByRole('button', { name: /WEX|Mobility|innovation/i }).first()

// Bring the card into view first, so the subsequent click doesn't itself move
// the scroll position — then the offset we read is the one that gets recorded.
async function positionAtCard(page) {
  await wexCard(page).scrollIntoViewIfNeeded()
  const y = await page.evaluate(() => Math.round(window.scrollY))
  // Wait until the recorder has actually captured this offset, rather than
  // guessing a fixed delay — keeps the test robust under parallel load.
  await expect
    .poll(() => page.evaluate(() => {
      const s = window.__scrollPositions
      return s ? Math.max(0, ...Array.from(s.values())) : 0
    }))
    .toBeGreaterThan(y - 40)
  return y
}

test.describe('ScrollManager', () => {
  test('a new navigation lands at the top of the case study', async ({ page }) => {
    await authenticate(page)
    await page.goto('/')

    await positionAtCard(page)
    await wexCard(page).click()
    await page.waitForURL(/innovation-transformation-WEX/)

    await expect
      .poll(() => page.evaluate(() => window.scrollY), {
        timeout: 4000,
        message: 'case study should open at the top'
      })
      .toBeLessThan(5)
  })

  test('opening a case study does not animate — it jumps', async ({ page }) => {
    // Regression guard for the CSS `scroll-behavior: smooth` interaction: a
    // click while scrolled down must jump to the top, not glide (an animation
    // the incoming images can interrupt partway).
    await authenticate(page)
    await page.goto('/')

    const before = await positionAtCard(page)
    expect(before, 'card should be below the fold so a glide would be visible').toBeGreaterThan(200)

    await wexCard(page).click()
    await page.waitForURL(/innovation-transformation-WEX/)

    // Two readings ~one frame apart. A smooth glide would still be moving.
    const a = await page.evaluate(() => window.scrollY)
    await page.waitForTimeout(60)
    const b = await page.evaluate(() => window.scrollY)
    expect(a).toBeLessThan(5)
    expect(b).toBeLessThan(5)
  })

  test('back-navigation restores the homepage scroll position', async ({ page }) => {
    await authenticate(page)
    await page.goto('/')

    const before = await positionAtCard(page)
    expect(before).toBeGreaterThan(200)

    await wexCard(page).click()
    await page.waitForURL(/innovation-transformation-WEX/)
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5)

    // The regression: POP must return near `before`, not to 0.
    await page.goBack()
    await page.waitForURL((url) => url.pathname.endsWith('/portfolio25/'))

    await expect
      .poll(() => page.evaluate(() => window.scrollY), {
        timeout: 4000,
        message: 'back-nav should restore the prior offset'
      })
      .toBeGreaterThan(before - 60)

    const after = await page.evaluate(() => window.scrollY)
    expect(Math.abs(after - before)).toBeLessThan(60)
  })

  test('the outgoing offset survives in the position store', async ({ page }) => {
    // Directly asserts the bug that made restoration fail: the outgoing entry's
    // recorded offset must not be clobbered to 0 by the teardown or the settle
    // loop.
    await authenticate(page)
    await page.goto('/')

    const before = await positionAtCard(page)
    expect(before).toBeGreaterThan(200)

    await wexCard(page).click()
    await page.waitForURL(/innovation-transformation-WEX/)

    const maxStored = await page.evaluate(() => {
      const store = window.__scrollPositions
      if (!store) return null
      return Math.max(0, ...Array.from(store.values()))
    })
    expect(maxStored, 'a non-zero offset should be retained').toBeGreaterThan(before - 60)
  })
})
