import { test, expect } from '@playwright/test';
import { APIHelper } from '../../utils/helpers/api-helper';

test.describe('API Health Check Tests', () => {
  let apiHelper: APIHelper;

  test.beforeAll(async ({ request }) => {
    apiHelper = new APIHelper(request);
  });

  test('should return 200 status for health check', async () => {
    const response = await apiHelper.get('/api/health-check');
    expect(response.status()).toBe(200);
  });

  test('should have correct content type', async () => {
    const response = await apiHelper.get('/api/health-check');
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');
  });

  test('should return valid JSON response', async () => {
    const response = await apiHelper.get('/api/health-check');
    const body = await response.json();
    expect(body).toBeTruthy();
  });

  test('should have success status in response body', async () => {
    const response = await apiHelper.get('/api/health-check');
    const body = await response.json();
    expect(body.success).toBe(true);
  });
});
