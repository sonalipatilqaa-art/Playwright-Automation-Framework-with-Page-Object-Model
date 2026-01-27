import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Autocomplete Page Object Model
 */
export class AutocompletePage extends BasePage {
  // Locators
  private searchInput: Locator;
  private suggestions: Locator;
  private submitButton: Locator;
  private result: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('#myInput');
    this.suggestions = page.locator('.autocomplete-items div');
    this.submitButton = page.locator('button[type="submit"]');
    this.result = page.locator('#result');
  }

  /**
   * Navigate to Autocomplete page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.AUTOCOMPLETE);
  }

  /**
   * Type in search input
   */
  async typeInSearch(text: string): Promise<void> {
    await ActionHelper.type(this.searchInput, text, 100);
  }

  /**
   * Get suggestions count
   */
  async getSuggestionsCount(): Promise<number> {
    return await this.getElementCount(this.suggestions);
  }

  /**
   * Click suggestion by index
   */
  async clickSuggestion(index: number): Promise<void> {
    const suggestion = this.suggestions.nth(index);
    await ActionHelper.click(suggestion);
  }

  /**
   * Submit form
   */
  async submit(): Promise<void> {
    await ActionHelper.click(this.submitButton);
  }

  /**
   * Get result text
   */
  async getResultText(): Promise<string> {
    return await this.getElementText(this.result);
  }
}