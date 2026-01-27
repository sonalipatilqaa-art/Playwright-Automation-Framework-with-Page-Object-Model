import { test, expect } from '@playwright/test';
import { HorizontalSliderPage } from '../../pages/interactions/HorizontalSliderPage';

test.describe('Horizontal Slider Page Tests', () => {
  let sliderPage: HorizontalSliderPage;

  test.beforeEach(async ({ page }) => {
    sliderPage = new HorizontalSliderPage(page);
    await sliderPage.navigate();
  });

  test('should display horizontal slider page', async () => {
    const title = await sliderPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should set slider value', async ({ page }) => {
    await sliderPage.setSliderValue('3');
    await page.waitForTimeout(500);
    
    const value = await sliderPage.getSliderValue();
    expect(value).toBeTruthy();
  });

  test('should move slider right', async ({ page }) => {
    await sliderPage.moveSliderRight(5);
    await page.waitForTimeout(500);
    
    const value = await sliderPage.getSliderValue();
    expect(value).toBeTruthy();
  });

  test('should move slider left', async ({ page }) => {
    await sliderPage.setSliderValue('5');
    await page.waitForTimeout(300);
    
    await sliderPage.moveSliderLeft(3);
    await page.waitForTimeout(300);
    
    const value = await sliderPage.getSliderValue();
    expect(value).toBeTruthy();
  });
});
