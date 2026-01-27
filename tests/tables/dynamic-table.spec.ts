import { test, expect } from '@playwright/test';
import { DynamicTablePage } from '../../pages/tables/DynamicTablePage';

test.describe('Dynamic Table Page Tests', () => {
  let dynamicTablePage: DynamicTablePage;

  test.beforeEach(async ({ page }) => {
    dynamicTablePage = new DynamicTablePage(page);
    await dynamicTablePage.navigate();
  });

  test('should display dynamic table', async () => {
    const title = await dynamicTablePage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should get table rows count', async () => {
    const rowsCount = await dynamicTablePage.getRowsCount();
    expect(rowsCount).toBeGreaterThan(0);
  });

  test('should get cell value', async () => {
    const cellValue = await dynamicTablePage.getCellValue(0, 0);
    expect(cellValue).toBeTruthy();
  });

  test('should get all row values', async () => {
    const rowValues = await dynamicTablePage.getRowValues(0);
    expect(rowValues.length).toBeGreaterThan(0);
  });

  test('should verify table has data', async () => {
    const rowsCount = await dynamicTablePage.getRowsCount();
    expect(rowsCount).toBeGreaterThanOrEqual(1);
    
    // Verify first row has data
    if (rowsCount > 0) {
      const firstCellValue = await dynamicTablePage.getCellValue(0, 0);
      expect(firstCellValue).toBeTruthy();
    }
  });
});
