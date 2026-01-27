import { Page, Locator } from '@playwright/test';

/**
 * Helper class for wait operations
 */
export class WaitHelper {
  /**
   * Wait for element to be visible
   */
  static async waitForVisible(element: Locator, timeout: number = 30000): Promise<void> {
    await element.waitFor({ state: 'visible', timeout });
  }

  /**
   * Wait for element to be hidden
   */
  static async waitForHidden(element: Locator, timeout: number = 30000): Promise<void> {
    await element.waitFor({ state: 'hidden', timeout });
  }

  /**
   * Wait for element to be attached to DOM
   */
  static async waitForAttached(element: Locator, timeout: number = 30000): Promise<void> {
    await element.waitFor({ state: 'attached', timeout });
  }

  /**
   * Wait for element to be detached from DOM
   */
  static async waitForDetached(element: Locator, timeout: number = 30000): Promise<void> {
    await element.waitFor({ state: 'detached', timeout });
  }

  /**
   * Wait for page load
   */
  static async waitForPageLoad(page: Page, timeout: number = 30000): Promise<void> {
    await page.waitForLoadState('load', { timeout });
  }

  /**
   * Wait for network idle
   */
  static async waitForNetworkIdle(page: Page, timeout: number = 30000): Promise<void> {
    await page.waitForLoadState('networkidle', { timeout });
  }

  /**
   * Wait for specific time in milliseconds
   */
  static async wait(milliseconds: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  /**
   * Wait for URL to contain specific text
   */
  static async waitForURL(page: Page, urlPart: string, timeout: number = 30000): Promise<void> {
    await page.waitForURL(`**/*${urlPart}*`, { timeout });
  }

  /**
   * Wait for selector to be present
   */
  static async waitForSelector(page: Page, selector: string, timeout: number = 30000): Promise<void> {
    await page.waitForSelector(selector, { state: 'visible', timeout });
  }
}