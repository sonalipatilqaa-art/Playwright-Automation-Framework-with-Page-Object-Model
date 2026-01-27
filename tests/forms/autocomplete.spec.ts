import { test, expect } from '@playwright/test';
import { AutocompletePage } from '../../pages/forms/AutocompletePage';

test.describe('Autocomplete Page Tests', () => {
  let autocompletePage: AutocompletePage;

  test.beforeEach(async ({ page }) => {
    autocompletePage = new AutocompletePage(page);
    await autocompletePage.navigate();
  });

  test('should display autocomplete page', async () => {
    const title = await autocompletePage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should show suggestions on typing', async ({ page }) => {
    await autocompletePage.typeInSearch('uni');
    await page.waitForTimeout(1000);
    
    const suggestionsCount = await autocompletePage.getSuggestionsCount();
    expect(suggestionsCount).toBeGreaterThan(0);
  });

  test('should be able to type in autocomplete field', async ({ page }) => {
    await autocompletePage.typeInSearch('test');
    await page.waitForTimeout(500);
    
    const currentURL = autocompletePage.getCurrentURL();
    expect(currentURL).toContain('autocomplete');
  });
});
