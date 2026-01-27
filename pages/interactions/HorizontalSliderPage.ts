import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';
import { ActionHelper } from '../../utils/helpers/action-helper';

/**
 * Horizontal Slider Page Object Model
 */
export class HorizontalSliderPage extends BasePage {
  // Locators
  private slider: Locator;
  private sliderValue: Locator;

  constructor(page: Page) {
    super(page);
    this.slider = page.locator('input[type="range"]');
    this.sliderValue = page.locator('#range');
  }

  /**
   * Navigate to Horizontal Slider page
   */
  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + URLs.HORIZONTAL_SLIDER);
  }

  /**
   * Set slider value
   */
  async setSliderValue(value: string): Promise<void> {
    await this.slider.fill(value);
  }

  /**
   * Get slider value
   */
  async getSliderValue(): Promise<string> {
    return await this.getElementText(this.sliderValue);
  }

  /**
   * Move slider by arrow keys
   */
  async moveSliderRight(times: number = 1): Promise<void> {
    await this.slider.focus();
    for (let i = 0; i < times; i++) {
      await ActionHelper.pressKey(this.page, 'ArrowRight');
    }
  }

  /**
   * Move slider left
   */
  async moveSliderLeft(times: number = 1): Promise<void> {
    await this.slider.focus();
    for (let i = 0; i < times; i++) {
      await ActionHelper.pressKey(this.page, 'ArrowLeft');
    }
  }
}