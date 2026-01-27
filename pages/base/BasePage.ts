import { Page, Locator, expect } from '@playwright/test';
import { WaitHelper } from '../../utils/helpers/wait-helper';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Base Page Object Model
 * All page objects should extend this class
 */
export class BasePage {
  protected page: Page;
  protected waitHelper: typeof WaitHelper;
  protected actionHelper: typeof ActionHelper;

  constructor(page: Page) {
    this.page = page;
    this.waitHelper = WaitHelper;
    this.actionHelper = ActionHelper;
  }

  /**
   * Navigate to a specific URL
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
    await WaitHelper.waitForPageLoad(this.page);
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get current URL
   */
  getCurrentURL(): string {
    return this.page.url();
  }

  /**
   * Reload the page
   */
  async reload(): Promise<void> {
    await this.page.reload();
    await WaitHelper.waitForPageLoad(this.page);
  }

  /**
   * Go back in browser history
   */
  async goBack(): Promise<void> {
    await this.page.goBack();
    await WaitHelper.waitForPageLoad(this.page);
  }

  /**
   * Go forward in browser history
   */
  async goForward(): Promise<void> {
    await this.page.goForward();
    await WaitHelper.waitForPageLoad(this.page);
  }

  /**
   * Take screenshot
   */
  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({ path, fullPage: true });
  }

  /**
   * Get element text
   */
  async getElementText(locator: Locator): Promise<string> {
    await WaitHelper.waitForVisible(locator);
    return await locator.textContent() || '';
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(locator: Locator): Promise<boolean> {
    try {
      await WaitHelper.waitForVisible(locator, 5000);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check if element is enabled
   */
  async isElementEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  /**
   * Check if element is checked
   */
  async isElementChecked(locator: Locator): Promise<boolean> {
    return await locator.isChecked();
  }

  /**
   * Get element attribute
   */
  async getElementAttribute(locator: Locator, attribute: string): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  /**
   * Wait for element
   */
  async waitForElement(locator: Locator, timeout: number = 30000): Promise<void> {
    await WaitHelper.waitForVisible(locator, timeout);
  }

  /**
   * Handle alert/dialog
   */
  async handleDialog(accept: boolean = true, promptText?: string): Promise<void> {
    this.page.on('dialog', async dialog => {
      if (promptText) {
        await dialog.accept(promptText);
      } else if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
  }

  /**
   * Switch to new window/tab
   */
  async switchToNewWindow(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page')
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  /**
   * Close current page
   */
  async closePage(): Promise<void> {
    await this.page.close();
  }

  /**
   * Get all text from elements
   */
  async getAllTexts(locator: Locator): Promise<string[]> {
    await WaitHelper.waitForVisible(locator.first());
    return await locator.allTextContents();
  }

  /**
   * Get element count
   */
  async getElementCount(locator: Locator): Promise<number> {
    return await locator.count();
  }

  /**
   * Scroll to element
   */
  async scrollToElement(locator: Locator): Promise<void> {
    await ActionHelper.scrollIntoView(locator);
  }

  /**
   * Wait for URL to contain text
   */
  async waitForURLContains(text: string, timeout: number = 30000): Promise<void> {
    await WaitHelper.waitForURL(this.page, text, timeout);
  }

  /**
   * Execute JavaScript
   */
  async executeScript(script: string, ...args: any[]): Promise<any> {
    return await this.page.evaluate(script, ...args);
  }
}