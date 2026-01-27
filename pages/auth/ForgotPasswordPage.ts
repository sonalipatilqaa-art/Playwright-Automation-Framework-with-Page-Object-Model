import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Forgot Password Page Object Model
 */
export class ForgotPasswordPage extends BasePage {
  // Locators
  private emailInput: Locator;
  private submitButton: Locator;
  private successMessage: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#email');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.alert-success');
    this.errorMessage = page.locator('.alert-danger');
  }

  /**
   * Navigate to Forgot Password page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.FORGOT_PASSWORD);
  }

  /**
   * Submit forgot password form
   */
  async submitForgotPassword(email: string): Promise<void> {
    await ActionHelper.fill(this.emailInput, email);
    await ActionHelper.click(this.submitButton);
  }

  /**
   * Get success message
   */
  async getSuccessMessage(): Promise<string> {
    return await this.getElementText(this.successMessage);
  }

  /**
   * Get error message
   */
  async getErrorMessage(): Promise<string> {
    return await this.getElementText(this.errorMessage);
  }
}