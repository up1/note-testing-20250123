import { test, expect } from '@playwright/test';

test('ซื้อ Americano 1 แก้วนะ', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveScreenshot();
});

// await expect(page.locator('#app > div:nth-child(3) > ul > li:nth-child(6)')).toHaveScreenshot();