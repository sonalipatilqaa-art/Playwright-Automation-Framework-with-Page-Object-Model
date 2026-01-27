import { APIRequestContext } from '@playwright/test';

/**
 * API Helper class for REST API testing
 */
export class APIHelper {
  private request: APIRequestContext;
  private baseURL: string;

  constructor(request: APIRequestContext, baseURL: string = 'https://practice.expandtesting.com') {
    this.request = request;
    this.baseURL = baseURL;
  }

  /**
   * GET request
   */
  async get(endpoint: string, headers?: Record<string, string>) {
    return await this.request.get(`${this.baseURL}${endpoint}`, { headers });
  }

  /**
   * POST request
   */
  async post(endpoint: string, data?: any, headers?: Record<string, string>) {
    return await this.request.post(`${this.baseURL}${endpoint}`, {
      data,
      headers
    });
  }

  /**
   * PUT request
   */
  async put(endpoint: string, data?: any, headers?: Record<string, string>) {
    return await this.request.put(`${this.baseURL}${endpoint}`, {
      data,
      headers
    });
  }

  /**
   * PATCH request
   */
  async patch(endpoint: string, data?: any, headers?: Record<string, string>) {
    return await this.request.patch(`${this.baseURL}${endpoint}`, {
      data,
      headers
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint: string, headers?: Record<string, string>) {
    return await this.request.delete(`${this.baseURL}${endpoint}`, { headers });
  }

  /**
   * Get response body as JSON
   */
  async getJSON(response: any) {
    return await response.json();
  }

  /**
   * Get response body as text
   */
  async getText(response: any) {
    return await response.text();
  }

  /**
   * Verify response status
   */
  verifyStatus(response: any, expectedStatus: number): boolean {
    return response.status() === expectedStatus;
  }

  /**
   * Verify response has header
   */
  verifyHeader(response: any, headerName: string): boolean {
    return response.headers()[headerName.toLowerCase()] !== undefined;
  }
}