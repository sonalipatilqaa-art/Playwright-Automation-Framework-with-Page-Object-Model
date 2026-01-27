import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Drag and Drop Page Object Model
 */
export class DragAndDropPage extends BasePage {
  // Locators
  private columnA: Locator;
  private columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  /**
   * Navigate to Drag and Drop page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.DRAG_DROP);
  }

  /**
   * Drag column A to B
   */
  async dragColumnAToB(): Promise<void> {
    await ActionHelper.dragAndDrop(this.columnA, this.columnB);
  }

  /**
   * Drag column B to A
   */
  async dragColumnBToA(): Promise<void> {
    await ActionHelper.dragAndDrop(this.columnB, this.columnA);
  }

  /**
   * Get column A text
   */
  async getColumnAText(): Promise<string> {
    return await this.getElementText(this.columnA);
  }

  /**
   * Get column B text
   */
  async getColumnBText(): Promise<string> {
    return await this.getElementText(this.columnB);
  }
}