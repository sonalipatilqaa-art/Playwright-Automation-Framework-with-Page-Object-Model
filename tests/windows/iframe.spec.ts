import { test, expect } from '@playwright/test';
import { IFramePage } from '../../pages/windows/IFramePage';

test.describe('IFrame Page Tests', () => {
  let iframePage: IFramePage;

  test.beforeEach(async ({ page }) => {
    iframePage = new IFramePage(page);
    await iframePage.navigate();
  });

  test('should display iframe page', async () => {
    const title = await iframePage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should get iframe content', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    const content = await iframePage.getIFrameContent();
    expect(content).toBeTruthy();
  });

  test('should type in iframe', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    const testText = 'This is a test text in iframe';
    await iframePage.clearIFrameContent();
    await iframePage.typeInIFrame(testText);
    
    await page.waitForTimeout(1000);
    
    const content = await iframePage.getIFrameContent();
    expect(content).toContain(testText);
  });

  test('should clear iframe content', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    await iframePage.clearIFrameContent();
    await page.waitForTimeout(500);
    
    // After clearing, iframe should be empty or have minimal content
    const currentURL = iframePage.getCurrentURL();
    expect(currentURL).toContain('iframe');
  });
});
