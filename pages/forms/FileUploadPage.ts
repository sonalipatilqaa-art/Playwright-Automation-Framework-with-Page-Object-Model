import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * File Upload Page Object Model
 */
export class FileUploadPage extends BasePage {
  // Locators
  private fileInput: Locator;
  private uploadButton: Locator;
  private uploadedFileName: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.fileInput = page.locator('#fileInput');
    this.uploadButton = page.locator('#uploadButton');
    this.uploadedFileName = page.locator('#uploaded-files');
    this.successMessage = page.locator('.alert-success');
  }

  /**
   * Navigate to File Upload page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.FILE_UPLOAD);
  }

  /**
   * Upload file
   */
  async uploadFile(filePath: string): Promise<void> {
    await ActionHelper.uploadFile(this.fileInput, filePath);
    await ActionHelper.click(this.uploadButton);
  }

  /**
   * Get uploaded file name
   */
  async getUploadedFileName(): Promise<string> {
    return await this.getElementText(this.uploadedFileName);
  }

  /**
   * Get success message
   */
  async getSuccessMessage(): Promise<string> {
    return await this.getElementText(this.successMessage);
  }
}