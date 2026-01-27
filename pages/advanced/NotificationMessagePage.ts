import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Notification Message Page Object Model
 */
export class NotificationMessagePage extends BasePage {
  // Locators
  private clickHereLink: Locator;
  private notificationMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.clickHereLink = page.locator('a[href="/notification-message"]');
    this.notificationMessage = page.locator('.alert, #flash');
  }

  /**
   * Navigate to Notification Message page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.NOTIFICATION_MESSAGE);
  }

  /**
   * Click to trigger notification
   */
  async clickToTriggerNotification(): Promise<void> {
    await ActionHelper.click(this.clickHereLink);
  }

  /**
   * Get notification message
   */
  async getNotificationMessage(): Promise<string> {
    return await this.getElementText(this.notificationMessage);
  }

  /**
   * Check if notification is visible
   */
  async isNotificationVisible(): Promise<boolean> {
    return await this.isElementVisible(this.notificationMessage);
  }
}