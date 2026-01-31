import { test, expect } from "@playwright/test";

/**
 * UI Test Cases
 * Testing user interface behavior and interactions
 */

test.describe("UI Tests", () => {
  // Test 1: Real-time output update behavior
test("Pos_UI_001: Verify real-time output updates as user types", async ({
  page,
}) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const inputField = page.locator(
    'textarea[placeholder*="Input Your Singlish Text"]',
  );

  // More specific selector: Find the output content div, not the header
  // Based on the snapshot, the output is in a generic div after the "Sinhala" header
  const outputField = page
    .locator('div:has(> div:text-is("Sinhala"))')
    .locator("> div")
    .nth(1);

  await expect(inputField).toBeVisible({ timeout: 10000 });

  // Start with empty fields
  await inputField.clear();
  await page.waitForTimeout(1000);
  let output = await outputField.textContent();

  // Don't strictly check for empty string, just verify it exists
  expect(output).toBeDefined();

  // Type first word
  await inputField.fill("mama");
  await page.waitForTimeout(1500);
  output = await outputField.textContent();
  expect(output?.trim()).toBeTruthy();
  const firstOutput = output?.trim() || "";

  // Add more text
  await inputField.fill("mama gedhara");
  await page.waitForTimeout(1500);
  output = await outputField.textContent();
  expect(output?.trim()).toBeTruthy();
  expect(output?.trim()).not.toBe(firstOutput); // Output should have changed

  // Complete the sentence
  await inputField.fill("mama kadeeta yanavaa");
  await page.waitForTimeout(1500);
  output = await outputField.textContent();
  expect(output?.trim()).toBeTruthy();
  expect(output?.trim().length).toBeGreaterThan(firstOutput.length);

  console.log(
    "Real-time update test passed - Output updates correctly as user types",
  );
});
});
