import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Add/Remove Elements Page Object Model
 */
export class AddRemoveElementsPage extends BasePage {
  // Locators
  private addElementButton: Locator;
  private deleteButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.addElementButton = page.locator('button:has-text("Add Element")');
    this.deleteButtons = page.locator('.added-manually');
  }

  /**
   * Navigate to Add/Remove Elements page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.ADD_REMOVE_ELEMENTS);
  }

  /**
   * Click add element button
   */
  async clickAddElement(): Promise<void> {
    await ActionHelper.click(this.addElementButton);
  }

  /**
   * Add multiple elements
   */
  async addMultipleElements(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      await this.clickAddElement();
    }
  }

  /**
   * Click delete button by index
   */
  async clickDeleteButton(index: number): Promise<void> {
    const deleteButton = this.deleteButtons.nth(index);
    await ActionHelper.click(deleteButton);
  }

  /**
   * Get delete buttons count
   */
  async getDeleteButtonsCount(): Promise<number> {
    return await this.getElementCount(this.deleteButtons);
  }

  /**
   * Remove all elements
   */
  async removeAllElements(): Promise<void> {
    const count = await this.getDeleteButtonsCount();
    for (let i = count - 1; i >= 0; i--) {
      await this.clickDeleteButton(0);
    }
  }
}