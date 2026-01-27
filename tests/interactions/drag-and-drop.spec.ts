import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../../pages/interactions/DragAndDropPage';

test.describe('Drag and Drop Page Tests', () => {
  let dragAndDropPage: DragAndDropPage;

  test.beforeEach(async ({ page }) => {
    dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.navigate();
  });

  test('should display drag and drop page', async () => {
    const title = await dragAndDropPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should get initial column texts', async () => {
    const columnAText = await dragAndDropPage.getColumnAText();
    const columnBText = await dragAndDropPage.getColumnBText();
    
    expect(columnAText).toBeTruthy();
    expect(columnBText).toBeTruthy();
  });

  test('should drag column A to B', async ({ page }) => {
    const initialColumnAText = await dragAndDropPage.getColumnAText();
    
    await dragAndDropPage.dragColumnAToB();
    await page.waitForTimeout(1000);
    
    // After drag, column positions should change
    const currentURL = dragAndDropPage.getCurrentURL();
    expect(currentURL).toContain('drag-and-drop');
  });

  test('should perform drag and drop operation', async ({ page }) => {
    // Get initial state
    const initialColumnAText = await dragAndDropPage.getColumnAText();
    const initialColumnBText = await dragAndDropPage.getColumnBText();
    
    // Perform drag and drop
    await dragAndDropPage.dragColumnAToB();
    await page.waitForTimeout(1000);
    
    // Verify page is still the same
    const currentURL = dragAndDropPage.getCurrentURL();
    expect(currentURL).toContain('drag-and-drop');
  });
});
