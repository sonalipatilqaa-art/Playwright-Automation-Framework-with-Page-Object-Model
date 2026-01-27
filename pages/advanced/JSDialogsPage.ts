import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * JavaScript Dialogs Page Object Model
 */
export class JSDialogsPage extends BasePage {
  // Locators
  private alertButton: Locator;
  private confirmButton: Locator;
  private promptButton: Locator;
  private resultText: Locator;

  constructor(page: Page) {
    super(page);
    this.alertButton = page.locator('#js-alert');
    this.confirmButton = page.locator('#js-confirm');
    this.promptButton = page.locator('#js-prompt');
    this.resultText = page.locator('#dialog-response');
  }

  /**
   * Navigate to JS Dialogs page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.JS_DIALOGS);
  }

  /**
   * Click alert button and accept
   */
  async clickAlertAndAccept(): Promise<void> {
    this.page.on('dialog', async dialog => {
      await dialog.accept();
    });
    await ActionHelper.click(this.alertButton);
  }

  /**
   * Click confirm button and accept
   */
  async clickConfirmAndAccept(): Promise<void> {
    this.page.on('dialog', async dialog => {
      await dialog.accept();
    });
    await ActionHelper.click(this.confirmButton);
  }

  /**
   * Click confirm button and dismiss
   */
  async clickConfirmAndDismiss(): Promise<void> {
    this.page.on('dialog', async dialog => {
      await dialog.dismiss();
    });
    await ActionHelper.click(this.confirmButton);
  }

  /**
   * Click prompt button and enter text
   */
  async clickPromptAndEnterText(text: string): Promise<void> {
    this.page.on('dialog', async dialog => {
      await dialog.accept(text);
    });
    await ActionHelper.click(this.promptButton);
  }

  /**
   * Get result text
   */
  async getResultText(): Promise<string> {
    return await this.getElementText(this.resultText);
  }
}