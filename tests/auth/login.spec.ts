import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/auth/LoginPage';
import { TestData } from '../../utils/constants/test-data';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should display login page title', async () => {
    const title = await loginPage.getTitle();
    expect(title).toContain('Practice Test Automation');
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login(TestData.VALID_LOGIN.username, TestData.VALID_LOGIN.password);
    
    // Verify successful login
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });

  test('should show error message with invalid credentials', async () => {
    await loginPage.login(TestData.INVALID_LOGIN.username, TestData.INVALID_LOGIN.password);
    
    // Verify error message is displayed
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBeTruthy();
  });

  test('should logout successfully', async ({ page }) => {
    // First login
    await loginPage.login(TestData.VALID_LOGIN.username, TestData.VALID_LOGIN.password);
    
    // Wait for login to complete
    await page.waitForTimeout(2000);
    
    // Then logout
    const isLoggedIn = await loginPage.isLoggedIn();
    if (isLoggedIn) {
      await loginPage.logout();
      
      // Verify logout
      await page.waitForTimeout(1000);
      const currentURL = loginPage.getCurrentURL();
      expect(currentURL).toContain('login');
    }
  });

  test('should not login with empty username', async () => {
    await loginPage.login('', TestData.VALID_LOGIN.password);
    
    // Should stay on login page
    const currentURL = loginPage.getCurrentURL();
    expect(currentURL).toContain('login');
  });

  test('should not login with empty password', async () => {
    await loginPage.login(TestData.VALID_LOGIN.username, '');
    
    // Should stay on login page
    const currentURL = loginPage.getCurrentURL();
    expect(currentURL).toContain('login');
  });
});
