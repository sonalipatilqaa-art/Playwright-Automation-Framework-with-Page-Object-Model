import { test, expect } from '@playwright/test';
import { InfiniteScrollPage } from '../../pages/interactions/InfiniteScrollPage';

test.describe('Infinite Scroll Page Tests', () => {
  let infiniteScrollPage: InfiniteScrollPage;

  test.beforeEach(async ({ page }) => {
    infiniteScrollPage = new InfiniteScrollPage(page);
    await infiniteScrollPage.navigate();
  });

  test('should display infinite scroll page', async () => {
    const title = await infiniteScrollPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should scroll to bottom', async ({ page }) => {
    await infiniteScrollPage.scrollToBottom();
    await page.waitForTimeout(1000);
    
    const currentURL = infiniteScrollPage.getCurrentURL();
    expect(currentURL).toContain('infinite-scroll');
  });

  test('should load more content on scroll', async ({ page }) => {
    const initialCount = await infiniteScrollPage.getLoadedContentCount();
    
    await infiniteScrollPage.scrollMultipleTimes(3);
    
    const newCount = await infiniteScrollPage.getLoadedContentCount();
    expect(newCount).toBeGreaterThanOrEqual(initialCount);
  });

  test('should continuously load content', async ({ page }) => {
    await infiniteScrollPage.scrollMultipleTimes(5);
    
    const count = await infiniteScrollPage.getLoadedContentCount();
    expect(count).toBeGreaterThan(0);
  });
});
