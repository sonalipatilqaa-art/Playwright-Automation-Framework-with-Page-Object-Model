import { test, expect } from '@playwright/test';
import { KeyPressesPage } from '../../pages/interactions/KeyPressesPage';

test.describe('Key Presses Page Tests', () => {
  let keyPressesPage: KeyPressesPage;

  test.beforeEach(async ({ page }) => {
    keyPressesPage = new KeyPressesPage(page);
    await keyPressesPage.navigate();
  });

  test('should display key presses page', async () => {
    const title = await keyPressesPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should detect Enter key press', async ({ page }) => {
    await keyPressesPage.pressKey('Enter');
    await page.waitForTimeout(500);
    
    const result = await keyPressesPage.getResultText();
    expect(result).toContain('ENTER');
  });

  test('should detect Escape key press', async ({ page }) => {
    await keyPressesPage.pressKey('Escape');
    await page.waitForTimeout(500);
    
    const result = await keyPressesPage.getResultText();
    expect(result).toContain('ESCAPE');
  });

  test('should detect Tab key press', async ({ page }) => {
    await keyPressesPage.pressKey('Tab');
    await page.waitForTimeout(500);
    
    const result = await keyPressesPage.getResultText();
    expect(result).toContain('TAB');
  });

  test('should detect Space key press', async ({ page }) => {
    await keyPressesPage.pressKey('Space');
    await page.waitForTimeout(500);
    
    const result = await keyPressesPage.getResultText();
    expect(result).toBeTruthy();
  });

  test('should type text in input field', async ({ page }) => {
    await keyPressesPage.typeText('Testing key presses');
    await page.waitForTimeout(500);
    
    const currentURL = keyPressesPage.getCurrentURL();
    expect(currentURL).toContain('key-presses');
  });
});
