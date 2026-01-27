import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Dynamic Pagination Table Page Object Model
 */
export class DynamicPaginationTablePage extends BasePage {
  // Locators
  private table: Locator;
  private tableRows: Locator;
  private rowsPerPageSelect: Locator;
  private nextButton: Locator;
  private previousButton: Locator;
  private searchInput: Locator;
  private sortButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.table = page.locator('table');
    this.tableRows = page.locator('tbody tr');
    this.rowsPerPageSelect = page.locator('select[name="example_length"]');
    this.nextButton = page.locator('#example_next');
    this.previousButton = page.locator('#example_previous');
    this.searchInput = page.locator('input[type="search"]');
    this.sortButtons = page.locator('th.sorting');
  }

  /**
   * Navigate to Dynamic Pagination Table page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.PAGINATION_TABLE);
  }

  /**
   * Select rows per page
   */
  async selectRowsPerPage(value: string): Promise<void> {
    await ActionHelper.selectByValue(this.rowsPerPageSelect, value);
  }

  /**
   * Click next page
   */
  async clickNext(): Promise<void> {
    await ActionHelper.click(this.nextButton);
  }

  /**
   * Click previous page
   */
  async clickPrevious(): Promise<void> {
    await ActionHelper.click(this.previousButton);
  }

  /**
   * Search in table
   */
  async search(text: string): Promise<void> {
    await ActionHelper.fill(this.searchInput, text);
  }

  /**
   * Get visible rows count
   */
  async getVisibleRowsCount(): Promise<number> {
    return await this.getElementCount(this.tableRows);
  }

  /**
   * Sort by column
   */
  async sortByColumn(columnIndex: number): Promise<void> {
    const sortButton = this.sortButtons.nth(columnIndex);
    await ActionHelper.click(sortButton);
  }
}