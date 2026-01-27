import { test, expect } from '@playwright/test';
import { ContextMenuPage } from '../../pages/interactions/ContextMenuPage';

test.describe('Context Menu Page Tests', () => {
  let contextMenuPage: ContextMenuPage;

  test.beforeEach(async ({ page }) => {
    contextMenuPage = new ContextMenuPage(page);
    await contextMenuPage.navigate();
  });

  test('should display context menu page', async () => {
    const title = await contextMenuPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should show alert on right click', async ({ page }) => {
    const alertMessage = await contextMenuPage.handleContextMenuAlert();
    expect(alertMessage).toBeTruthy();
  });

  test('should trigger context menu on hot spot', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      await dialog.accept();
    });
    
    await contextMenuPage.rightClickHotSpot();
    await page.waitForTimeout(1000);
  });
});
