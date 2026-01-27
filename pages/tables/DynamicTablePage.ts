import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';

/**
 * Dynamic Table Page Object Model
 */
export class DynamicTablePage extends BasePage {
  // Locators
  private table: Locator;
  private tableRows: Locator;
  private tableCells: Locator;
  private cpuValue: Locator;

  constructor(page: Page) {
    super(page);
    this.table = page.locator('table');
    this.tableRows = page.locator('tbody tr');
    this.tableCells = page.locator('tbody tr td');
    this.cpuValue = page.locator('.bg-warning');
  }

  /**
   * Navigate to Dynamic Table page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.DYNAMIC_TABLE);
  }

  /**
   * Get table rows count
   */
  async getRowsCount(): Promise<number> {
    return await this.getElementCount(this.tableRows);
  }

  /**
   * Get cell value by row and column
   */
  async getCellValue(row: number, column: number): Promise<string> {
    const cell = this.page.locator(`tbody tr:nth-child(${row + 1}) td:nth-child(${column + 1})`);
    return await this.getElementText(cell);
  }

  /**
   * Get CPU value
   */
  async getCPUValue(): Promise<string> {
    return await this.getElementText(this.cpuValue);
  }

  /**
   * Get all cell values in a row
   */
  async getRowValues(row: number): Promise<string[]> {
    const cells = this.page.locator(`tbody tr:nth-child(${row + 1}) td`);
    return await this.getAllTexts(cells);
  }
}