import { test, expect } from '@playwright/test';
import { ShadowDOMPage } from '../../pages/tables/ShadowDOMPage';

test.describe('Shadow DOM Page Tests', () => {
  let shadowDOMPage: ShadowDOMPage;

  test.beforeEach(async ({ page }) => {
    shadowDOMPage = new ShadowDOMPage(page);
    await shadowDOMPage.navigate();
  });

  test('should display shadow DOM page', async () => {
    const title = await shadowDOMPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should find shadow DOM element', async () => {
    const isVisible = await shadowDOMPage.isShadowDOMElementVisible();
    expect(isVisible).toBeTruthy();
  });

  test('should get text from shadow DOM', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    const text = await shadowDOMPage.getShadowDOMText();
    expect(text).toBeTruthy();
  });
});
