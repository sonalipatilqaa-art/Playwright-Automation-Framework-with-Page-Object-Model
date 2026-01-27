import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { Selectors } from '../../utils/constants/selectors';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Login Page Object Model
 */
export class LoginPage extends BasePage {
  // Locators
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private logoutButton: Locator;
  private successMessage: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator(Selectors.LOGIN_USERNAME);
    this.passwordInput = page.locator(Selectors.LOGIN_PASSWORD);
    this.loginButton = page.locator(Selectors.LOGIN_BUTTON);
    this.logoutButton = page.locator(Selectors.LOGOUT_BUTTON);
    this.successMessage = page.locator(Selectors.SUCCESS_MESSAGE);
    this.errorMessage = page.locator(Selectors.ERROR_MESSAGE);
  }

  /**
   * Navigate to Login page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.LOGIN);
  }

  /**
   * Login with credentials
   */
  async login(username: string, password: string): Promise<void> {
    await ActionHelper.fill(this.usernameInput, username);
    await ActionHelper.fill(this.passwordInput, password);
    await ActionHelper.click(this.loginButton);
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

  /**
   * Check if logout button is visible
   */
  async isLoggedIn(): Promise<boolean> {
    return await this.isElementVisible(this.logoutButton);
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await ActionHelper.click(this.logoutButton);
  }
}