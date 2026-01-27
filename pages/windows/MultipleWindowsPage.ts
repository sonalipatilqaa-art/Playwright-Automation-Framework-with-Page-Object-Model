import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Multiple Windows Page Object Model
 */
export class MultipleWindowsPage extends BasePage {
  // Locators
  private clickHereLink: Locator;

  constructor(page: Page) {
    super(page);
    this.clickHereLink = page.locator('a[href="/windows/new"]');
  }

  /**
   * Navigate to Multiple Windows page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.MULTIPLE_WINDOWS);
  }

  /**
   * Click to open new window
   */
  async clickOpenNewWindow(): Promise<void> {
    await ActionHelper.click(this.clickHereLink);
  }

  /**
   * Open new window and return new page
   */
  async openNewWindow(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.clickOpenNewWindow()
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}