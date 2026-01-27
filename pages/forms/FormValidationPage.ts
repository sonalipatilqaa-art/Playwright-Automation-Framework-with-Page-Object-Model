import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Form Validation Page Object Model
 */
export class FormValidationPage extends BasePage {
  // Locators
  private contactNameInput: Locator;
  private contactNumberInput: Locator;
  private pickupDateInput: Locator;
  private paymentMethodSelect: Locator;
  private submitButton: Locator;
  private validationMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.contactNameInput = page.locator('#contactName');
    this.contactNumberInput = page.locator('#contactNumber');
    this.pickupDateInput = page.locator('#pickupDate');
    this.paymentMethodSelect = page.locator('#paymentMethod');
    this.submitButton = page.locator('button[type="submit"]');
    this.validationMessage = page.locator('.valid-feedback, .invalid-feedback');
  }

  /**
   * Navigate to Form Validation page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.FORM_VALIDATION);
  }

  /**
   * Fill form
   */
  async fillForm(
    contactName: string,
    contactNumber: string,
    pickupDate: string,
    paymentMethod: string
  ): Promise<void> {
    await ActionHelper.fill(this.contactNameInput, contactName);
    await ActionHelper.fill(this.contactNumberInput, contactNumber);
    await ActionHelper.fill(this.pickupDateInput, pickupDate);
    await ActionHelper.selectByValue(this.paymentMethodSelect, paymentMethod);
  }

  /**
   * Submit form
   */
  async submitForm(): Promise<void> {
    await ActionHelper.click(this.submitButton);
  }

  /**
   * Get validation message
   */
  async getValidationMessage(): Promise<string> {
    return await this.getElementText(this.validationMessage);
  }
}