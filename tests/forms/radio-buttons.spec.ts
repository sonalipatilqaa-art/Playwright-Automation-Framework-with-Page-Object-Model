import { test, expect } from '@playwright/test';
import { RadioButtonsPage } from '../../pages/forms/RadioButtonsPage';

test.describe('Radio Buttons Page Tests', () => {
  let radioButtonsPage: RadioButtonsPage;

  test.beforeEach(async ({ page }) => {
    radioButtonsPage = new RadioButtonsPage(page);
    await radioButtonsPage.navigate();
  });

  test('should display radio buttons page', async () => {
    const title = await radioButtonsPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should select radio button', async ({ page }) => {
    await radioButtonsPage.selectRadioButton('red');
    await page.waitForTimeout(500);
    
    const isSelected = await radioButtonsPage.isRadioButtonSelected('red');
    expect(isSelected).toBeTruthy();
  });

  test('should select different radio buttons', async ({ page }) => {
    // Select first radio button
    await radioButtonsPage.selectRadioButton('red');
    await page.waitForTimeout(300);
    let isSelected = await radioButtonsPage.isRadioButtonSelected('red');
    expect(isSelected).toBeTruthy();

    // Select second radio button
    await radioButtonsPage.selectRadioButton('blue');
    await page.waitForTimeout(300);
    isSelected = await radioButtonsPage.isRadioButtonSelected('blue');
    expect(isSelected).toBeTruthy();

    // First should now be unselected
    const firstSelected = await radioButtonsPage.isRadioButtonSelected('red');
    expect(firstSelected).toBeFalsy();
  });
});
