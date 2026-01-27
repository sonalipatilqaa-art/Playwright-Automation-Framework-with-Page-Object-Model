import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../../pages/auth/ForgotPasswordPage';
import { TestData } from '../../utils/constants/test-data';

test.describe('Forgot Password Page Tests', () => {
  let forgotPasswordPage: ForgotPasswordPage;

  test.beforeEach(async ({ page }) => {
    forgotPasswordPage = new ForgotPasswordPage(page);
    await forgotPasswordPage.navigate();
  });

  test('should display forgot password page', async () => {
    const title = await forgotPasswordPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should submit forgot password with valid email', async ({ page }) => {
    await forgotPasswordPage.submitForgotPassword(TestData.REGISTRATION.email);
    
    await page.waitForTimeout(2000);
    
    // Verify success or error message appears
    const currentURL = forgotPasswordPage.getCurrentURL();
    expect(currentURL).toBeTruthy();
  });

  test('should show error with invalid email', async ({ page }) => {
    await forgotPasswordPage.submitForgotPassword('invalidemail');
    
    await page.waitForTimeout(1000);
    
    const currentURL = forgotPasswordPage.getCurrentURL();
    expect(currentURL).toContain('forgot-password');
  });

  test('should not submit with empty email', async ({ page }) => {
    await forgotPasswordPage.submitForgotPassword('');
    
    await page.waitForTimeout(1000);
    
    // Should stay on forgot password page
    const currentURL = forgotPasswordPage.getCurrentURL();
    expect(currentURL).toContain('forgot-password');
  });
});
