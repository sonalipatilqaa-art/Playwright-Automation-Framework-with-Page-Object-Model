import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Hovers Page Object Model
 */
export class HoversPage extends BasePage {
  // Locators
  private figures: Locator;
  private captions: Locator;

  constructor(page: Page) {
    super(page);
    this.figures = page.locator('.figure');
    this.captions = page.locator('.figcaption');
  }

  /**
   * Navigate to Hovers page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.HOVERS);
  }

  /**
   * Hover over figure by index
   */
  async hoverOverFigure(index: number): Promise<void> {
    const figure = this.figures.nth(index);
    await ActionHelper.hover(figure);
  }

  /**
   * Get caption text after hover
   */
  async getCaptionText(index: number): Promise<string> {
    const caption = this.captions.nth(index);
    return await this.getElementText(caption);
  }

  /**
   * Check if caption is visible
   */
  async isCaptionVisible(index: number): Promise<boolean> {
    const caption = this.captions.nth(index);
    return await this.isElementVisible(caption);
  }
}