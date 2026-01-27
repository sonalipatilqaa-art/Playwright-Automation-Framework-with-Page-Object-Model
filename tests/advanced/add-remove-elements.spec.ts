import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../../pages/advanced/AddRemoveElementsPage';

test.describe('Add/Remove Elements Page Tests', () => {
  let addRemovePage: AddRemoveElementsPage;

  test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemoveElementsPage(page);
    await addRemovePage.navigate();
  });

  test('should display add/remove elements page', async () => {
    const title = await addRemovePage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should add single element', async ({ page }) => {
    const initialCount = await addRemovePage.getDeleteButtonsCount();
    
    await addRemovePage.clickAddElement();
    await page.waitForTimeout(500);
    
    const newCount = await addRemovePage.getDeleteButtonsCount();
    expect(newCount).toBe(initialCount + 1);
  });

  test('should add multiple elements', async ({ page }) => {
    const elementsToAdd = 5;
    const initialCount = await addRemovePage.getDeleteButtonsCount();
    
    await addRemovePage.addMultipleElements(elementsToAdd);
    await page.waitForTimeout(1000);
    
    const newCount = await addRemovePage.getDeleteButtonsCount();
    expect(newCount).toBe(initialCount + elementsToAdd);
  });

  test('should remove element', async ({ page }) => {
    // First add an element
    await addRemovePage.clickAddElement();
    await page.waitForTimeout(500);
    
    const countAfterAdd = await addRemovePage.getDeleteButtonsCount();
    expect(countAfterAdd).toBeGreaterThan(0);
    
    // Then remove it
    await addRemovePage.clickDeleteButton(0);
    await page.waitForTimeout(500);
    
    const countAfterRemove = await addRemovePage.getDeleteButtonsCount();
    expect(countAfterRemove).toBe(countAfterAdd - 1);
  });

  test('should add and remove multiple elements', async ({ page }) => {
    // Add 5 elements
    await addRemovePage.addMultipleElements(5);
    await page.waitForTimeout(1000);
    
    let count = await addRemovePage.getDeleteButtonsCount();
    expect(count).toBeGreaterThanOrEqual(5);
    
    // Remove 3 elements
    for (let i = 0; i < 3; i++) {
      await addRemovePage.clickDeleteButton(0);
      await page.waitForTimeout(300);
    }
    
    count = await addRemovePage.getDeleteButtonsCount();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
