import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Sortable Tables Page Object Model
 */
export class SortableTablesPage extends BasePage {
  // Locators
  private table1: Locator;
  private table2: Locator;
  private table1Headers: Locator;
  private table2Headers: Locator;

  constructor(page: Page) {
    super(page);
    this.table1 = page.locator('#table1');
    this.table2 = page.locator('#table2');
    this.table1Headers = page.locator('#table1 thead th');
    this.table2Headers = page.locator('#table2 thead th');
  }

  /**
   * Navigate to Sortable Tables page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.SORTABLE_TABLES);
  }

  /**
   * Click table header to sort
   */
  async sortTable1ByColumn(columnIndex: number): Promise<void> {
    const header = this.table1Headers.nth(columnIndex);
    await ActionHelper.click(header);
  }

  /**
   * Get table1 cell value
   */
  async getTable1CellValue(row: number, column: number): Promise<string> {
    const cell = this.page.locator(`#table1 tbody tr:nth-child(${row + 1}) td:nth-child(${column + 1})`);
    return await this.getElementText(cell);
  }

  /**
   * Get table2 cell value
   */
  async getTable2CellValue(row: number, column: number): Promise<string> {
    const cell = this.page.locator(`#table2 tbody tr:nth-child(${row + 1}) td:nth-child(${column + 1})`);
    return await this.getElementText(cell);
  }
}