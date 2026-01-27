import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * IFrame Page Object Model
 */
export class IFramePage extends BasePage {
  // Locators
  private iframe: Locator;

  constructor(page: Page) {
    super(page);
    this.iframe = page.frameLocator('#mce_0_ifr');
  }

  /**
   * Navigate to IFrame page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.IFRAME);
  }

  /**
   * Get iframe content
   */
  async getIFrameContent(): Promise<string> {
    const body = this.iframe.locator('body');
    return await body.textContent() || '';
  }

  /**
   * Type in iframe
   */
  async typeInIFrame(text: string): Promise<void> {
    const body = this.iframe.locator('body');
    await body.click();
    await body.fill(text);
  }

  /**
   * Clear iframe content
   */
  async clearIFrameContent(): Promise<void> {
    const body = this.iframe.locator('body');
    await body.click();
    await body.clear();
  }
}