import { test, expect } from '@playwright/test';
import { CookieAlertPage } from '../../pages/advanced/CookieAlertPage';

test.describe('Cookie Alert Page Tests', () => {
  let cookieAlertPage: CookieAlertPage;

  test.beforeEach(async ({ page }) => {
    cookieAlertPage = new CookieAlertPage(page);
    await cookieAlertPage.navigate();
  });

  test('should display cookie alert page', async () => {
    const title = await cookieAlertPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should show cookie alert on page load', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    const isVisible = await cookieAlertPage.isCookieAlertVisible();
    expect(isVisible).toBeTruthy();
  });

  test('should accept cookies', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    await cookieAlertPage.acceptCookies();
    await page.waitForTimeout(1000);
    
    // After accepting, alert should disappear
    const isVisible = await cookieAlertPage.isCookieAlertVisible();
    expect(isVisible).toBeFalsy();
  });

  test('should decline cookies', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    await cookieAlertPage.declineCookies();
    await page.waitForTimeout(1000);
    
    // After declining, alert should disappear
    const isVisible = await cookieAlertPage.isCookieAlertVisible();
    expect(isVisible).toBeFalsy();
  });

  test('should set cookies after acceptance', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    await cookieAlertPage.acceptCookies();
    await page.waitForTimeout(1000);
    
    const cookies = await cookieAlertPage.getCookies();
    expect(cookies).toBeTruthy();
  });
});
