import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Checkboxes Page Object Model
 */
export class CheckboxesPage extends BasePage {
  // Locators
  private checkboxes: Locator;

  constructor(page: Page) {
    super(page);
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  /**
   * Navigate to Checkboxes page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.CHECKBOXES);
  }

  /**
   * Check checkbox by index
   */
  async checkCheckbox(index: number): Promise<void> {
    const checkbox = this.checkboxes.nth(index);
    await ActionHelper.check(checkbox);
  }

  /**
   * Uncheck checkbox by index
   */
  async uncheckCheckbox(index: number): Promise<void> {
    const checkbox = this.checkboxes.nth(index);
    await ActionHelper.uncheck(checkbox);
  }

  /**
   * Check if checkbox is checked
   */
  async isCheckboxChecked(index: number): Promise<boolean> {
    const checkbox = this.checkboxes.nth(index);
    return await this.isElementChecked(checkbox);
  }

  /**
   * Get total checkboxes count
   */
  async getCheckboxesCount(): Promise<number> {
    return await this.getElementCount(this.checkboxes);
  }
}