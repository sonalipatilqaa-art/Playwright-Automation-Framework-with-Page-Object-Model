import { test, expect } from '@playwright/test';
import { MultipleWindowsPage } from '../../pages/windows/MultipleWindowsPage';

test.describe('Multiple Windows Page Tests', () => {
  let multipleWindowsPage: MultipleWindowsPage;

  test.beforeEach(async ({ page }) => {
    multipleWindowsPage = new MultipleWindowsPage(page);
    await multipleWindowsPage.navigate();
  });

  test('should display multiple windows page', async () => {
    const title = await multipleWindowsPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should open new window', async ({ page, context }) => {
    const newPage = await multipleWindowsPage.openNewWindow();
    
    // Verify new page opened
    expect(newPage).toBeTruthy();
    
    // Wait for new page to load
    await newPage.waitForLoadState();
    
    // Verify new page URL
    const newPageURL = newPage.url();
    expect(newPageURL).toBeTruthy();
    
    // Close new page
    await newPage.close();
  });

  test('should switch between windows', async ({ page, context }) => {
    const initialURL = multipleWindowsPage.getCurrentURL();
    
    // Open new window
    const newPage = await multipleWindowsPage.openNewWindow();
    await newPage.waitForLoadState();
    
    // Verify we can interact with new window
    const newPageTitle = await newPage.title();
    expect(newPageTitle).toBeTruthy();
    
    // Verify original page still has correct URL
    const currentURL = multipleWindowsPage.getCurrentURL();
    expect(currentURL).toBe(initialURL);
    
    // Close new page
    await newPage.close();
  });

  test('should handle multiple new windows', async ({ page, context }) => {
    // Open first new window
    const newPage1 = await multipleWindowsPage.openNewWindow();
    await newPage1.waitForLoadState();
    
    // Verify pages count
    const pages = context.pages();
    expect(pages.length).toBeGreaterThanOrEqual(2);
    
    // Clean up
    await newPage1.close();
  });
});
