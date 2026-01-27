import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Radio Buttons Page Object Model
 */
export class RadioButtonsPage extends BasePage {
  // Locators
  private radioButtons: Locator;
  private selectedValue: Locator;

  constructor(page: Page) {
    super(page);
    this.radioButtons = page.locator('input[type="radio"]');
    this.selectedValue = page.locator('#selected-value');
  }

  /**
   * Navigate to Radio Buttons page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.RADIO_BUTTONS);
  }

  /**
   * Select radio button by value
   */
  async selectRadioButton(value: string): Promise<void> {
    const radioButton = this.page.locator(`input[type="radio"][value="${value}"]`);
    await ActionHelper.check(radioButton);
  }

  /**
   * Get selected value
   */
  async getSelectedValue(): Promise<string> {
    return await this.getElementText(this.selectedValue);
  }

  /**
   * Check if radio button is selected
   */
  async isRadioButtonSelected(value: string): Promise<boolean> {
    const radioButton = this.page.locator(`input[type="radio"][value="${value}"]`);
    return await this.isElementChecked(radioButton);
  }
}