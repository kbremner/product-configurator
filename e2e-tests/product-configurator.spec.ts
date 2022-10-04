import { test, expect } from "@playwright/test";

test("Loads the first product by default", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Product Configurator/);

  await expect(page.locator("body")).toHaveText(/Hardcover Notebook/);

  await expect(page.locator("table")).toHaveText(/Sunset/);
  await expect(page.locator("table")).toHaveText(/Dotted/);

  await expect(page).toHaveScreenshot("starting state.png");
});

test("Info changes when I select a different colour", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.locator("text=Ocean").click();

  await expect(page.locator("table")).toHaveText(/Ocean/);

  await expect(page).toHaveScreenshot("change colour.png");
});

test("Info changes when I select a different page layout", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.locator("text=Lined").click();

  await expect(page.locator("table")).toHaveText(/Lined/);

  await expect(page).toHaveScreenshot("change page layout.png");
});
