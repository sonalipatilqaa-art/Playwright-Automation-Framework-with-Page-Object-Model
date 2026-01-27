import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Dropdown Page Object Model
 */
export class DropdownPage extends BasePage {
  // Locators
  private dropdown: Locator;
  private selectedOption: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator('#dropdown');
    this.selectedOption = page.locator('#dropdown option:checked');
  }

  /**
   * Navigate to Dropdown page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.DROPDOWN);
  }

  /**
   * Select option by value
   */
  async selectByValue(value: string): Promise<void> {
    await ActionHelper.selectByValue(this.dropdown, value);
  }

  /**
   * Select option by label
   */
  async selectByLabel(label: string): Promise<void> {
    await ActionHelper.selectByLabel(this.dropdown, label);
  }

  /**
   * Get selected option text
   */
  async getSelectedOption(): Promise<string> {
    return await this.getElementText(this.selectedOption);
  }
}