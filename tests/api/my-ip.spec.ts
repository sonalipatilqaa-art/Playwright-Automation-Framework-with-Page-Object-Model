import { test, expect } from '@playwright/test';
import { APIHelper } from '../../utils/helpers/api-helper';

test.describe('My IP API Tests', () => {
  let apiHelper: APIHelper;

  test.beforeAll(async ({ request }) => {
    apiHelper = new APIHelper(request);
  });

  test('should return 200 status for my IP endpoint', async () => {
    const response = await apiHelper.get('/api/my-ip/');
    expect(response.status()).toBe(200);
  });

  test('should return IP address in response', async () => {
    const response = await apiHelper.get('/api/my-ip/');
    const body = await response.json();
    
    expect(body).toBeTruthy();
    expect(body.ip).toBeTruthy();
  });

  test('should have valid IP format', async () => {
    const response = await apiHelper.get('/api/my-ip/');
    const body = await response.json();
    
    // IP address should be a string
    expect(typeof body.ip).toBe('string');
    expect(body.ip.length).toBeGreaterThan(0);
  });

  test('should have correct response headers', async () => {
    const response = await apiHelper.get('/api/my-ip/');
    
    expect(response.headers()['content-type']).toContain('application/json');
  });
});
