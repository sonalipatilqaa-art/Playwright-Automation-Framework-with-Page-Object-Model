import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Key Presses Page Object Model
 */
export class KeyPressesPage extends BasePage {
  // Locators
  private inputField: Locator;
  private result: Locator;

  constructor(page: Page) {
    super(page);
    this.inputField = page.locator('#target');
    this.result = page.locator('#result');
  }

  /**
   * Navigate to Key Presses page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.KEY_PRESSES);
  }

  /**
   * Press key
   */
  async pressKey(key: string): Promise<void> {
    await this.inputField.focus();
    await ActionHelper.pressKey(this.page, key);
  }

  /**
   * Get result text
   */
  async getResultText(): Promise<string> {
    return await this.getElementText(this.result);
  }

  /**
   * Type text
   */
  async typeText(text: string): Promise<void> {
    await ActionHelper.fill(this.inputField, text);
  }
}