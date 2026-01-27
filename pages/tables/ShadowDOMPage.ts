import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Shadow DOM Page Object Model
 */
export class ShadowDOMPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to Shadow DOM page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.SHADOW_DOM);
  }

  /**
   * Get shadow host element
   */
  getShadowHost() {
    return this.page.locator('my-paragraph');
  }

  /**
   * Get text from shadow DOM
   */
  async getShadowDOMText(): Promise<string> {
    const shadowHost = this.getShadowHost();
    const shadowContent = shadowHost.locator('span[slot="my-text"]');
    return await this.getElementText(shadowContent);
  }

  /**
   * Check if shadow DOM element exists
   */
  async isShadowDOMElementVisible(): Promise<boolean> {
    const shadowHost = this.getShadowHost();
    return await this.isElementVisible(shadowHost);
  }
}