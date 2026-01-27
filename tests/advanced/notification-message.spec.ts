import { test, expect } from '@playwright/test';
import { NotificationMessagePage } from '../../pages/advanced/NotificationMessagePage';

test.describe('Notification Message Page Tests', () => {
  let notificationPage: NotificationMessagePage;

  test.beforeEach(async ({ page }) => {
    notificationPage = new NotificationMessagePage(page);
    await notificationPage.navigate();
  });

  test('should display notification message page', async () => {
    const title = await notificationPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('should show notification on click', async ({ page }) => {
    await notificationPage.clickToTriggerNotification();
    await page.waitForTimeout(1000);
    
    const isVisible = await notificationPage.isNotificationVisible();
    expect(isVisible).toBeTruthy();
  });

  test('should get notification message text', async ({ page }) => {
    await notificationPage.clickToTriggerNotification();
    await page.waitForTimeout(1000);
    
    const message = await notificationPage.getNotificationMessage();
    expect(message).toBeTruthy();
  });

  test('should trigger notification multiple times', async ({ page }) => {
    // First notification
    await notificationPage.clickToTriggerNotification();
    await page.waitForTimeout(1000);
    let isVisible = await notificationPage.isNotificationVisible();
    expect(isVisible).toBeTruthy();

    // Second notification
    await notificationPage.clickToTriggerNotification();
    await page.waitForTimeout(1000);
    isVisible = await notificationPage.isNotificationVisible();
    expect(isVisible).toBeTruthy();
  });
});
