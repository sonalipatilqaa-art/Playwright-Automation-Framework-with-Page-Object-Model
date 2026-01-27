import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Cookie Alert Page Object Model
 */
export class CookieAlertPage extends BasePage {
  // Locators
  private cookieAlert: Locator;
  private acceptButton: Locator;
  private declineButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cookieAlert = page.locator('#cookie-alert');
    this.acceptButton = page.locator('#accept-cookies');
    this.declineButton = page.locator('#decline-cookies');
  }

  /**
   * Navigate to Cookie Alert page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.COOKIE_ALERT);
  }

  /**
   * Check if cookie alert is visible
   */
  async isCookieAlertVisible(): Promise<boolean> {
    return await this.isElementVisible(this.cookieAlert);
  }

  /**
   * Accept cookies
   */
  async acceptCookies(): Promise<void> {
    await ActionHelper.click(this.acceptButton);
  }

  /**
   * Decline cookies
   */
  async declineCookies(): Promise<void> {
    await ActionHelper.click(this.declineButton);
  }

  /**
   * Get cookies
   */
  async getCookies() {
    return await this.page.context().cookies();
  }
}