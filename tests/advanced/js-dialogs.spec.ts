import { test, expect } from '@playwright/test';
import { JSDialogsPage } from '../../pages/advanced/JSDialogsPage';

test.describe('JavaScript Dialogs Page Tests', () => {
  let jsDialogsPage: JSDialogsPage;

  test.beforeEach(async ({ page }) => {
    jsDialogsPage = new JSDialogsPage(page);
    await jsDialogsPage.navigate();
  });

  test('should display JS dialogs page', async () => {
    const title = await jsDialogsPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should handle alert dialog', async ({ page }) => {
    await jsDialogsPage.clickAlertAndAccept();
    await page.waitForTimeout(1000);
    
    const resultText = await jsDialogsPage.getResultText();
    expect(resultText).toBeTruthy();
  });

  test('should accept confirm dialog', async ({ page }) => {
    await jsDialogsPage.clickConfirmAndAccept();
    await page.waitForTimeout(1000);
    
    const resultText = await jsDialogsPage.getResultText();
    expect(resultText).toContain('Ok');
  });

  test('should dismiss confirm dialog', async ({ page }) => {
    await jsDialogsPage.clickConfirmAndDismiss();
    await page.waitForTimeout(1000);
    
    const resultText = await jsDialogsPage.getResultText();
    expect(resultText).toContain('Cancel');
  });

  test('should handle prompt dialog with text', async ({ page }) => {
    const testText = 'Test Input';
    await jsDialogsPage.clickPromptAndEnterText(testText);
    await page.waitForTimeout(1000);
    
    const resultText = await jsDialogsPage.getResultText();
    expect(resultText).toContain(testText);
  });
});
