import { test, expect } from '@playwright/test';
import { DropdownPage } from '../../pages/forms/DropdownPage';

test.describe('Dropdown Page Tests', () => {
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.navigate();
  });

  test('should display dropdown page', async () => {
    const title = await dropdownPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should select option by value', async ({ page }) => {
    await dropdownPage.selectByValue('1');
    await page.waitForTimeout(500);
    
    const selectedOption = await dropdownPage.getSelectedOption();
    expect(selectedOption).toContain('Option 1');
  });

  test('should select option by label', async ({ page }) => {
    await dropdownPage.selectByLabel('Option 2');
    await page.waitForTimeout(500);
    
    const selectedOption = await dropdownPage.getSelectedOption();
    expect(selectedOption).toContain('Option 2');
  });

  test('should change dropdown selection', async ({ page }) => {
    // Select first option
    await dropdownPage.selectByValue('1');
    await page.waitForTimeout(300);
    let selectedOption = await dropdownPage.getSelectedOption();
    expect(selectedOption).toContain('Option 1');

    // Change to second option
    await dropdownPage.selectByValue('2');
    await page.waitForTimeout(300);
    selectedOption = await dropdownPage.getSelectedOption();
    expect(selectedOption).toContain('Option 2');
  });
});
