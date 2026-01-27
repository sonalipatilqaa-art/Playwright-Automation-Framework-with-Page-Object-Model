import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Web Inputs Page Object Model
 */
export class WebInputsPage extends BasePage {
  // Locators
  private numberInput: Locator;
  private textInput: Locator;
  private passwordInput: Locator;
  private dateInput: Locator;
  private displayValue: Locator;

  constructor(page: Page) {
    super(page);
    this.numberInput = page.locator('#input-number');
    this.textInput = page.locator('#input-text');
    this.passwordInput = page.locator('#input-password');
    this.dateInput = page.locator('#input-date');
    this.displayValue = page.locator('#output');
  }

  /**
   * Navigate to Web Inputs page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.INPUTS);
  }

  /**
   * Enter number
   */
  async enterNumber(value: string): Promise<void> {
    await ActionHelper.fill(this.numberInput, value);
  }

  /**
   * Enter text
   */
  async enterText(value: string): Promise<void> {
    await ActionHelper.fill(this.textInput, value);
  }

  /**
   * Enter password
   */
  async enterPassword(value: string): Promise<void> {
    await ActionHelper.fill(this.passwordInput, value);
  }

  /**
   * Enter date
   */
  async enterDate(value: string): Promise<void> {
    await ActionHelper.fill(this.dateInput, value);
  }

  /**
   * Get display value
   */
  async getDisplayValue(): Promise<string> {
    return await this.getElementText(this.displayValue);
  }
}