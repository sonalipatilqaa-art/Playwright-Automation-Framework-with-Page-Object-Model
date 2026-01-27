import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Context Menu Page Object Model
 */
export class ContextMenuPage extends BasePage {
  // Locators
  private hotSpot: Locator;

  constructor(page: Page) {
    super(page);
    this.hotSpot = page.locator('#hot-spot');
  }

  /**
   * Navigate to Context Menu page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.CONTEXT_MENU);
  }

  /**
   * Right click on hot spot
   */
  async rightClickHotSpot(): Promise<void> {
    await ActionHelper.rightClick(this.hotSpot);
  }

  /**
   * Handle context menu alert
   */
  async handleContextMenuAlert(): Promise<string> {
    let alertMessage = '';
    
    this.page.on('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept();
    });
    
    await this.rightClickHotSpot();
    await this.page.waitForTimeout(1000);
    
    return alertMessage;
  }
}