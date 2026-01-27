import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Register Page Object Model
 */
export class RegisterPage extends BasePage {
  // Locators
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private usernameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private registerButton: Locator;
  private successMessage: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.usernameInput = page.locator('#username');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.confirmPasswordInput = page.locator('#confirmPassword');
    this.registerButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.alert-success');
    this.errorMessage = page.locator('.alert-danger');
  }

  /**
   * Navigate to Register page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.REGISTER);
  }

  /**
   * Register new user
   */
  async register(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> {
    await ActionHelper.fill(this.firstNameInput, firstName);
    await ActionHelper.fill(this.lastNameInput, lastName);
    await ActionHelper.fill(this.usernameInput, username);
    await ActionHelper.fill(this.emailInput, email);
    await ActionHelper.fill(this.passwordInput, password);
    await ActionHelper.fill(this.confirmPasswordInput, confirmPassword);
    await ActionHelper.click(this.registerButton);
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