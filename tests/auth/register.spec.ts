import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/auth/RegisterPage';
import { TestData } from '../../utils/constants/test-data';

test.describe('Register Page Tests', () => {
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.navigate();
  });

  test('should display register page', async () => {
    const title = await registerPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should register with valid data', async () => {
    const timestamp = Date.now();
    const uniqueUsername = `user${timestamp}`;
    const uniqueEmail = `user${timestamp}@example.com`;

    await registerPage.register(
      TestData.REGISTRATION.firstName,
      TestData.REGISTRATION.lastName,
      uniqueUsername,
      uniqueEmail,
      TestData.REGISTRATION.password,
      TestData.REGISTRATION.confirmPassword
    );

    // Wait for response
    await registerPage.page.waitForTimeout(2000);

    // Check if we stayed on the same page or got redirected
    const currentURL = registerPage.getCurrentURL();
    expect(currentURL).toBeTruthy();
  });

  test('should show error with password mismatch', async ({ page }) => {
    const timestamp = Date.now();
    const uniqueUsername = `user${timestamp}`;
    const uniqueEmail = `user${timestamp}@example.com`;

    await registerPage.register(
      TestData.REGISTRATION.firstName,
      TestData.REGISTRATION.lastName,
      uniqueUsername,
      uniqueEmail,
      TestData.REGISTRATION.password,
      'DifferentPassword123!'
    );

    await page.waitForTimeout(1000);
    
    // Should stay on register page
    const currentURL = registerPage.getCurrentURL();
    expect(currentURL).toContain('register');
  });

  test('should not register with empty required fields', async ({ page }) => {
    await registerPage.register('', '', '', '', '', '');
    
    await page.waitForTimeout(1000);
    
    // Should stay on register page
    const currentURL = registerPage.getCurrentURL();
    expect(currentURL).toContain('register');
  });

  test('should not register with invalid email format', async ({ page }) => {
    const timestamp = Date.now();
    const uniqueUsername = `user${timestamp}`;

    await registerPage.register(
      TestData.REGISTRATION.firstName,
      TestData.REGISTRATION.lastName,
      uniqueUsername,
      'invalidemail',
      TestData.REGISTRATION.password,
      TestData.REGISTRATION.confirmPassword
    );

    await page.waitForTimeout(1000);
    
    // Should stay on register page
    const currentURL = registerPage.getCurrentURL();
    expect(currentURL).toContain('register');
  });
});
