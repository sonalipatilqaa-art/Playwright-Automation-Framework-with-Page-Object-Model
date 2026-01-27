import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../../pages/forms/CheckboxesPage';

test.describe('Checkboxes Page Tests', () => {
  let checkboxesPage: CheckboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigate();
  });

  test('should display checkboxes page', async () => {
    const title = await checkboxesPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should check first checkbox', async ({ page }) => {
    await checkboxesPage.checkCheckbox(0);
    await page.waitForTimeout(500);
    
    const isChecked = await checkboxesPage.isCheckboxChecked(0);
    expect(isChecked).toBeTruthy();
  });

  test('should uncheck checkbox', async ({ page }) => {
    // First check it
    await checkboxesPage.checkCheckbox(0);
    await page.waitForTimeout(300);
    
    // Then uncheck it
    await checkboxesPage.uncheckCheckbox(0);
    await page.waitForTimeout(300);
    
    const isChecked = await checkboxesPage.isCheckboxChecked(0);
    expect(isChecked).toBeFalsy();
  });

  test('should get total checkboxes count', async () => {
    const count = await checkboxesPage.getCheckboxesCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should check multiple checkboxes', async ({ page }) => {
    const count = await checkboxesPage.getCheckboxesCount();
    
    // Check all checkboxes
    for (let i = 0; i < count && i < 5; i++) {
      await checkboxesPage.checkCheckbox(i);
      await page.waitForTimeout(200);
    }
    
    // Verify at least one is checked
    const firstChecked = await checkboxesPage.isCheckboxChecked(0);
    expect(firstChecked).toBeTruthy();
  });
});
