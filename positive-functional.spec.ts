import { test, expect } from "@playwright/test";

/**
 * Positive Functional Test Cases
 * Testing correct Singlish to Sinhala conversions
 */

test.describe("Positive Functional Tests", () => {
  // Test 1: Simple sentence - Daily language usage
  test("Pos_Fun_001: Convert simple present tense sentence", async ({
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
    await inputField.fill("mama kadeeta yanavaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
    expect(output?.trim().length).toBeGreaterThan(0);
  });

  // Test 2: Compound sentence
  test("Pos_Fun_002: Convert compound sentence with conjunction", async ({
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
      "mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
    expect(output?.trim().length).toBeGreaterThan(0);
  });

  // Test 3: Complex sentence with conditional
  test("Pos_Fun_003: Convert complex sentence with cause/effect", async ({
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
    await inputField.fill("oya enavaanam mama balan innavaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 4: Interrogative form - Question
  test("Pos_Fun_004: Convert interrogative sentence", async ({ page }) => {
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
    await inputField.fill("oyaata kohomadha ?");
    await page.waitForTimeout(4000);

    const output = await outputField.textContent();
    expect(output?.trim().length).toBeGreaterThan(0);
  });

  // Test 5: Imperative form - Command
  test("Pos_Fun_005: Convert imperative sentence", async ({ page }) => {
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
    await inputField.fill("vahaama enna");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 6: Positive sentence form
  test("Pos_Fun_006: Convert positive form sentence", async ({ page }) => {
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
    await inputField.fill("mama ehema karanavaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 7: Negative sentence form
  test("Pos_Fun_007: Convert negative form sentence", async ({ page }) => {
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
    await inputField.fill("mama ehema karannee naehae");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 8: Common greeting
  test("Pos_Fun_008: Convert common greeting", async ({ page }) => {
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
    await inputField.fill("aayuboovan!");
    await page.waitForTimeout(4000);

    const output = await outputField.textContent();
    expect(output).toContain("!");
  });

  // Test 9: Polite request
  test("Pos_Fun_009: Convert polite request phrase", async ({ page }) => {
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
      "karuNaakaralaa mata podi udhavvak karanna puLuvandha?",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 10: Informal phrasing
  test("Pos_Fun_010: Convert informal phrase", async ({ page }) => {
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
    await inputField.fill("eeyi, ooka dhiyan");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 11: Common day-to-day expression
  test("Pos_Fun_011: Convert frequently used expression", async ({ page }) => {
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
    await inputField.fill("mata nidhimathayi");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 12: Multi-word expression
  test("Pos_Fun_012: Convert multi-word collocation", async ({ page }) => {
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
    await inputField.fill("kaeema kanna");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 13: Repeated word for emphasis
  test("Pos_Fun_013: Convert repeated word expression", async ({ page }) => {
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
    await inputField.fill("hari hari");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 14: Past tense
  test("Pos_Fun_014: Convert past tense sentence", async ({ page }) => {
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
    await inputField.fill("mama iiyee gedhara giyaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 15: Future tense
  test("Pos_Fun_015: Convert future tense sentence", async ({ page }) => {
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
    await inputField.fill("mama heta enavaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 16: Plural pronoun
  test("Pos_Fun_016: Convert sentence with plural pronoun", async ({
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
    await inputField.fill("api yamu");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 17: Mixed language - English technical term
  test("Pos_Fun_017: Convert mixed Singlish with English brand term", async ({
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
    await inputField.fill("Zoom meeting ekak thiyennee");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output).toContain("Zoom");
  });

  // Test 18: Place name preservation
  test("Pos_Fun_018: Convert sentence with place name", async ({ page }) => {
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
    await inputField.fill("siiyaa Colombo yanna hadhannee");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output).toContain("Colombo");
  });

  // Test 19: English abbreviations
  test("Pos_Fun_019: Convert input with abbreviations", async ({ page }) => {
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
    await inputField.fill("mama ASAP enna oonee");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 20: Punctuation preservation
  test("Pos_Fun_020: Convert input with punctuation marks", async ({
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
      "mama adha office ekata gihin aavaa eeka nisaa mata nidhimathayi. passe dhavasaka api kathaa karamu.",
    );
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 21: Currency format
  test("Pos_Fun_021: Convert input with currency", async ({ page }) => {
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
    await inputField.fill("meeka Rs. 5343 yi");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 22: Date format
  test("Pos_Fun_022: Convert input with date", async ({ page }) => {
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
    await inputField.fill("mama dhesaembar 25 enavaa");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 23: Slang/colloquial phrase
  test("Pos_Fun_023: Convert slang expression", async ({ page }) => {
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
    await inputField.fill("ela machan! supiri!!");
    await page.waitForTimeout(2000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  // Test 24: Medium-length input
  test("Pos_Fun_024: Convert medium-length paragraph", async ({ page }) => {
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
    const mediumText =
      "mama gedhara gihin saha bath kanna hadhanavaa. ehenam television balanna hithenavaa. mama adha office ekata gihin aavaa eeka nisaa mata nidhimathayi.";
    await inputField.fill(mediumText);
    await page.waitForTimeout(3000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  test("Pos_Fun_025: Convert medium-length paragraph", async ({ page }) => {
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
    const longText =
      "passe dhavasaka api kathaa karamu needha? mokadha dhaen mata mahansi. thee bonavaa nam bonna. mama gihin ennam.";
    await inputField.fill(longText);
    await page.waitForTimeout(3000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  test("Pos_Fun_026: Convert medium-length paragraph", async ({ page }) => {
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
    const longText =
      "api monaa hari kaaLama kathaa karamu needha? mokadha  dhaen mahansith aethi nee. naethnam monaahari bomu eeka hoDHayi";
    await inputField.fill(longText);
    await page.waitForTimeout(3000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  test("Pos_Fun_027: Convert medium-length paragraph", async ({ page }) => {
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
    const longText =
      "mama raeta bath saha kiri hodhi hadhanavaa. eeka hari lassanayi. magee aachchige kaeema vitharak mama igena gannee. mokadha aachchgee kaeema rasayi. oyaa mokadha kiyannee?";
    await inputField.fill(longText);
    await page.waitForTimeout(3000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
  });

  test("Pos_Fun_028: Convert medium-length paragraph", async ({ page }) => {
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
    const longText =
      "mama kohomahari hodhatama karanna balannee haebaeyi. ehema karaama thamayi magee hitha aethule santhooShaya vaedi vennee.";
    await inputField.fill(longText);
    await page.waitForTimeout(3000);

    const output = await outputField.textContent();
    expect(output?.trim()).toBeTruthy();
    expect(output?.trim().length).toBeGreaterThan(50);
  });
});
