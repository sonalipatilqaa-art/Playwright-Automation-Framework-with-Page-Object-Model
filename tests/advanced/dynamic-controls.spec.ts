import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../../pages/advanced/DynamicControlsPage';

test.describe('Dynamic Controls Page Tests', () => {
  let dynamicControlsPage: DynamicControlsPage;

  test.beforeEach(async ({ page }) => {
    dynamicControlsPage = new DynamicControlsPage(page);
    await dynamicControlsPage.navigate();
  });

  test('should display dynamic controls page', async () => {
    const title = await dynamicControlsPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should remove checkbox', async ({ page }) => {
    // Verify checkbox is initially visible
    let isVisible = await dynamicControlsPage.isCheckboxVisible();
    expect(isVisible).toBeTruthy();

    // Click remove button
    await dynamicControlsPage.clickRemove();
    await page.waitForTimeout(2000);

    // Verify checkbox is removed
    isVisible = await dynamicControlsPage.isCheckboxVisible();
    expect(isVisible).toBeFalsy();
  });

  test('should add checkbox back', async ({ page }) => {
    // First remove the checkbox
    await dynamicControlsPage.clickRemove();
    await page.waitForTimeout(2000);

    // Then add it back
    await dynamicControlsPage.clickAdd();
    await page.waitForTimeout(2000);

    // Verify checkbox is visible
    const isVisible = await dynamicControlsPage.isCheckboxVisible();
    expect(isVisible).toBeTruthy();
  });

  test('should enable input field', async ({ page }) => {
    // Click enable button
    await dynamicControlsPage.clickEnable();
    await page.waitForTimeout(2000);

    // Verify input is enabled
    const isEnabled = await dynamicControlsPage.isInputEnabled();
    expect(isEnabled).toBeTruthy();
  });

  test('should show message when removing checkbox', async ({ page }) => {
    await dynamicControlsPage.clickRemove();
    await page.waitForTimeout(2000);

    const message = await dynamicControlsPage.getMessageText();
    expect(message).toBeTruthy();
  });
});
