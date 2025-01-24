import { test, expect } from "@playwright/test";

test("ซื้อ Americano 1 แก้วนะ", async ({ page }) => {
  await test.step("เข้าเว็บไซต์", async () => {
    await page.goto("https://seleniumbase.io/coffee/");
  });
  await test.step("เลือก Americano", async () => {
    await page.locator('[data-test="Americano"]').click();
  });
  await test.step("กด Checkout", async () => {
    await page.locator('[data-test="checkout"]').click();
  });

  await test.step("กรอกชื่อ", async () => {
    await page.getByRole("textbox", { name: "Name" }).click();
    await page.getByRole("textbox", { name: "Name" }).fill("somkiat");
    await page.getByRole("button", { name: "Submit" }).click();
  });

  await test.step("กด Thanks for your purchase", async () => {
    await page.getByRole("button", { name: "Thanks for your purchase." }).click();
  });
});
