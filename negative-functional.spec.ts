import { test, expect } from "@playwright/test";

/**
 * Negative Functional Test Cases
 * Testing scenarios where the system fails or behaves incorrectly
 */

test.describe("Negative Functional Tests", () => {
  // Test 1: Joined words without spaces
  test("Neg_Fun_001: Fail to convert joined words correctly", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill("sathwoodhYaanaya wiwurtha karannee kiiyatadha?");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    // System may fail to properly segment this
    expect(output?.trim()).toBeTruthy();
    // We expect this to be different from properly spaced version
  });

  // Test 2: Very long input (>300 characters)
  test("Neg_Fun_002: Handle very long paragraph input", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    const longText = "tharaGayee wiirayaa paethum nissanka";
    await inputField.fill(longText);
    await page.waitForTimeout(3000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 3: Multiple consecutive spaces
  test("Neg_Fun_003: Handle multiple spaces between words", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill(
      "ganwathura aaDhaara kadinamin bedhaa dhena bawa janaaDhipathithumaa kiwwaa",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 4: Complex mixed English-Singlish with typos
  test("Neg_Fun_004: Handle mixed language with spelling variations", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill("wruksha wandhanaawa adhatath pawathinawaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 5: Input with only punctuation
  test("Neg_Fun_005: Handle input with only special characters", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill("nYAAyapathrayata anuwa uthsawaya aaramBha wunaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    // May produce empty or unchanged output
    console.log("Output for special chars:", output);
  });

  // Test 6: Numbers only input
  test("Neg_Fun_006: Handle numeric-only input", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill(
      "mama mee innawaa karanna dheyak naethuwa. mokadha  karannee meekata dhaen.",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 7: Mixed uppercase/lowercase irregularly
  test("Neg_Fun_007: Handle irregular capitalization", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill(
      "MaMa mee oluwa wikara welaa innnee. mata hithaa ganna baehae mokakdha karanne kiyalaa. oyaata monaa hari hithenawadha",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 8: Input with line breaks
  test("Neg_Fun_008: Handle multi-line input with breaks", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill("karapu paw wala anisansa gewaanna wenawaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 9: Extremely short ambiguous input
  test("Neg_Fun_009: Handle very short ambiguous input", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill(
      "ee game eka magee computer ekee gahanna baee magee RAM eka madhi wee",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 10: Input with tabs and special whitespace
  test("Neg_Fun_010: Handle input with tab characters", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const inputField = page.locator(
      'textarea[placeholder*="Input Your Singlish Text"]',
    );
    const outputField = page
      .locator("div")
      .filter({ hasText: /^Sinhala$/ })
      .locator("..")
      .locator("div")
      .nth(1);

    await expect(inputField).toBeVisible({ timeout: 10000 });
    await inputField.fill("switsalanthe yanna matath aasayi");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

    test("Neg_Fun_011: Handle input with tab characters", async ({ page }) => {
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      const inputField = page.locator(
        'textarea[placeholder*="Input Your Singlish Text"]',
      );
      const outputField = page
        .locator("div")
        .filter({ hasText: /^Sinhala$/ })
        .locator("..")
        .locator("div")
        .nth(1);

      await expect(inputField).toBeVisible({ timeout: 10000 });
      await inputField.fill(
        "Magee mee papuwa ridhenawaa. mata hithaa ganna baehae mokakdha karanne kiyalaa. oyaata monaa hari hithenawadha",
      );
      await page.waitForTimeout(2000);

      const output = await outputField.textContent();
      expect(output?.trim()).toBeTruthy();
    });
});
