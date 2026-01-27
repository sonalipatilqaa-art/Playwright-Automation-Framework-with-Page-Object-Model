import { test, expect } from '@playwright/test';
import { WebInputsPage } from '../../pages/forms/WebInputsPage';
import { TestData } from '../../utils/constants/test-data';

test.describe('Web Inputs Page Tests', () => {
  let webInputsPage: WebInputsPage;

  test.beforeEach(async ({ page }) => {
    webInputsPage = new WebInputsPage(page);
    await webInputsPage.navigate();
  });

  test('should display web inputs page', async () => {
    const title = await webInputsPage.getTitle();
    expect(title).toContain('Practice Test Automation');
  });

  test('should enter number in number input', async ({ page }) => {
    await webInputsPage.enterNumber(TestData.SAMPLE_NUMBER);
    await page.waitForTimeout(500);
    
    // Verify the input was entered
    const currentURL = webInputsPage.getCurrentURL();
    expect(currentURL).toContain('inputs');
  });

  test('should enter text in text input', async ({ page }) => {
    await webInputsPage.enterText(TestData.SAMPLE_TEXT);
    await page.waitForTimeout(500);
    
    const currentURL = webInputsPage.getCurrentURL();
    expect(currentURL).toContain('inputs');
  });

  test('should enter password in password input', async ({ page }) => {
    await webInputsPage.enterPassword(TestData.SAMPLE_PASSWORD);
    await page.waitForTimeout(500);
    
    const currentURL = webInputsPage.getCurrentURL();
    expect(currentURL).toContain('inputs');
  });

  test('should enter date in date input', async ({ page }) => {
    await webInputsPage.enterDate(TestData.SAMPLE_DATE);
    await page.waitForTimeout(500);
    
    const currentURL = webInputsPage.getCurrentURL();
    expect(currentURL).toContain('inputs');
  });

  test('should enter all input types', async ({ page }) => {
    await webInputsPage.enterNumber(TestData.SAMPLE_NUMBER);
    await webInputsPage.enterText(TestData.SAMPLE_TEXT);
    await webInputsPage.enterPassword(TestData.SAMPLE_PASSWORD);
    await webInputsPage.enterDate(TestData.SAMPLE_DATE);
    
    await page.waitForTimeout(1000);
    
    const currentURL = webInputsPage.getCurrentURL();
    expect(currentURL).toContain('inputs');
  });
});
