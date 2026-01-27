import { Page, Locator } from '@playwright/test';
import { WaitHelper } from './wait-helper';

/**
 * Helper class for common actions
 */
export class ActionHelper {
  /**
   * Click on element with wait
   */
  static async click(element: Locator): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.click();
  }

  /**
   * Double click on element
   */
  static async doubleClick(element: Locator): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.dblclick();
  }

  /**
   * Right click on element
   */
  static async rightClick(element: Locator): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.click({ button: 'right' });
  }

  /**
   * Fill input field
   */
  static async fill(element: Locator, text: string): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.clear();
    await element.fill(text);
  }

  /**
   * Type text with delay
   */
  static async type(element: Locator, text: string, delay: number = 100): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.type(text, { delay });
  }

  /**
   * Select option from dropdown by value
   */
  static async selectByValue(element: Locator, value: string): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.selectOption({ value });
  }

  /**
   * Select option from dropdown by label
   */
  static async selectByLabel(element: Locator, label: string): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.selectOption({ label });
  }

  /**
   * Check checkbox or radio button
   */
  static async check(element: Locator): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.check();
  }

  /**
   * Uncheck checkbox
   */
  static async uncheck(element: Locator): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.uncheck();
  }

  /**
   * Hover over element
   */
  static async hover(element: Locator): Promise<void> {
    await WaitHelper.waitForVisible(element);
    await element.hover();
  }

  /**
   * Scroll element into view
   */
  static async scrollIntoView(element: Locator): Promise<void> {
    await element.scrollIntoViewIfNeeded();
  }

  /**
   * Upload file
   */
  static async uploadFile(element: Locator, filePath: string | string[]): Promise<void> {
    await element.setInputFiles(filePath);
  }

  /**
   * Press keyboard key
   */
  static async pressKey(page: Page, key: string): Promise<void> {
    await page.keyboard.press(key);
  }

  /**
   * Drag and drop
   */
  static async dragAndDrop(source: Locator, target: Locator): Promise<void> {
    await source.dragTo(target);
  }
}