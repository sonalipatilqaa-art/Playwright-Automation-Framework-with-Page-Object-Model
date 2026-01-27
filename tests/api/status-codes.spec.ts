import { test, expect } from '@playwright/test';
import { APIHelper } from '../../utils/helpers/api-helper';

test.describe('Status Codes API Tests', () => {
  let apiHelper: APIHelper;

  test.beforeAll(async ({ request }) => {
    apiHelper = new APIHelper(request);
  });

  test('should return 200 OK', async () => {
    const response = await apiHelper.get('/status/200');
    expect(response.status()).toBe(200);
  });

  test('should return 201 Created', async () => {
    const response = await apiHelper.get('/status/201');
    expect(response.status()).toBe(201);
  });

  test('should return 301 Moved Permanently', async () => {
    const response = await apiHelper.get('/status/301');
    expect(response.status()).toBe(301);
  });

  test('should return 400 Bad Request', async () => {
    const response = await apiHelper.get('/status/400');
    expect(response.status()).toBe(400);
  });

  test('should return 401 Unauthorized', async () => {
    const response = await apiHelper.get('/status/401');
    expect(response.status()).toBe(401);
  });

  test('should return 404 Not Found', async () => {
    const response = await apiHelper.get('/status/404');
    expect(response.status()).toBe(404);
  });

  test('should return 500 Internal Server Error', async () => {
    const response = await apiHelper.get('/status/500');
    expect(response.status()).toBe(500);
  });

  test('should return 503 Service Unavailable', async () => {
    const response = await apiHelper.get('/status/503');
    expect(response.status()).toBe(503);
  });
});
