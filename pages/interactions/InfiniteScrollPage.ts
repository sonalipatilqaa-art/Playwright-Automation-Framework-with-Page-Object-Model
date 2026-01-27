import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Infinite Scroll Page Object Model
 */
export class InfiniteScrollPage extends BasePage {
  // Locators
  private scrollContent: Locator;

  constructor(page: Page) {
    super(page);
    this.scrollContent = page.locator('.jscroll-added');
  }

  /**
   * Navigate to Infinite Scroll page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.INFINITE_SCROLL);
  }

  /**
   * Scroll to bottom
   */
  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  /**
   * Scroll multiple times
   */
  async scrollMultipleTimes(times: number): Promise<void> {
    for (let i = 0; i < times; i++) {
      await this.scrollToBottom();
      await this.page.waitForTimeout(1000);
    }
  }

  /**
   * Get loaded content count
   */
  async getLoadedContentCount(): Promise<number> {
    return await this.getElementCount(this.scrollContent);
  }
}