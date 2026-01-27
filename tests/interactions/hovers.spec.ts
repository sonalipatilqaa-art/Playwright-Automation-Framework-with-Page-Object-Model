import { test, expect } from '@playwright/test';
import { HoversPage } from '../../pages/interactions/HoversPage';

test.describe('Hovers Page Tests', () => {
  let hoversPage: HoversPage;

  test.beforeEach(async ({ page }) => {
    hoversPage = new HoversPage(page);
    await hoversPage.navigate();
  });

  test('should display hovers page', async () => {
    const title = await hoversPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should show caption on hover over first figure', async ({ page }) => {
    await hoversPage.hoverOverFigure(0);
    await page.waitForTimeout(500);
    
    const isCaptionVisible = await hoversPage.isCaptionVisible(0);
    expect(isCaptionVisible).toBeTruthy();
  });

  test('should show caption text on hover', async ({ page }) => {
    await hoversPage.hoverOverFigure(0);
    await page.waitForTimeout(500);
    
    const captionText = await hoversPage.getCaptionText(0);
    expect(captionText).toBeTruthy();
  });

  test('should hover over multiple figures', async ({ page }) => {
    // Hover over first figure
    await hoversPage.hoverOverFigure(0);
    await page.waitForTimeout(300);
    let isVisible = await hoversPage.isCaptionVisible(0);
    expect(isVisible).toBeTruthy();

    // Hover over second figure
    await hoversPage.hoverOverFigure(1);
    await page.waitForTimeout(300);
    isVisible = await hoversPage.isCaptionVisible(1);
    expect(isVisible).toBeTruthy();
  });
});
