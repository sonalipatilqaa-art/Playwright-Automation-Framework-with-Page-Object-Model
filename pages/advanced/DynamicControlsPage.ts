import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Dynamic Controls Page Object Model
 */
export class DynamicControlsPage extends BasePage {
  // Locators
  private checkbox: Locator;
  private removeButton: Locator;
  private addButton: Locator;
  private inputField: Locator;
  private enableButton: Locator;
  private disableButton: Locator;
  private message: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox = page.locator('#checkbox');
    this.removeButton = page.locator('button:has-text("Remove")');
    this.addButton = page.locator('button:has-text("Add")');
    this.inputField = page.locator('input[type="text"]');
    this.enableButton = page.locator('button:has-text("Enable")');
    this.disableButton = page.locator('button:has-text("Disable")');
    this.message = page.locator('#message');
  }

  /**
   * Navigate to Dynamic Controls page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.DYNAMIC_CONTROLS);
  }

  /**
   * Click remove button
   */
  async clickRemove(): Promise<void> {
    await ActionHelper.click(this.removeButton);
  }

  /**
   * Click add button
   */
  async clickAdd(): Promise<void> {
    await ActionHelper.click(this.addButton);
  }

  /**
   * Click enable button
   */
  async clickEnable(): Promise<void> {
    await ActionHelper.click(this.enableButton);
  }

  /**
   * Click disable button
   */
  async clickDisable(): Promise<void> {
    await ActionHelper.click(this.disableButton);
  }

  /**
   * Check if checkbox is visible
   */
  async isCheckboxVisible(): Promise<boolean> {
    return await this.isElementVisible(this.checkbox);
  }

  /**
   * Check if input is enabled
   */
  async isInputEnabled(): Promise<boolean> {
    return await this.isElementEnabled(this.inputField);
  }

  /**
   * Get message text
   */
  async getMessageText(): Promise<string> {
    return await this.getElementText(this.message);
  }
}