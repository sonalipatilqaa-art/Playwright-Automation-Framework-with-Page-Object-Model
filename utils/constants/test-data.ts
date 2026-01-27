/**
 * Test Data Constants
 */
export class TestData {
  // Valid Login Credentials
  static readonly VALID_LOGIN = {
    username: 'practice',
    password: 'SuperSecretPassword!'
  };

  // Invalid Login Credentials
  static readonly INVALID_LOGIN = {
    username: 'invaliduser',
    password: 'wrongpassword'
  };

  // Basic Auth Credentials
  static readonly BASIC_AUTH = {
    username: 'admin',
    password: 'admin'
  };

  // Digest Auth Credentials
  static readonly DIGEST_AUTH = {
    username: 'admin',
    password: 'admin'
  };

  // Registration Data
  static readonly REGISTRATION = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe123',
    email: 'johndoe@example.com',
    password: 'SecurePass123!',
    confirmPassword: 'SecurePass123!'
  };

  // Contact Form Data
  static readonly CONTACT_FORM = {
    name: 'Test User',
    email: 'testuser@example.com',
    subject: 'Test Inquiry',
    message: 'This is a test message for automation testing.'
  };

  // File Paths
  static readonly TEST_FILE = './utils/test-data/sample-file.txt';
  static readonly TEST_IMAGE = './utils/test-data/sample-image.png';

  // Test Text Values
  static readonly SAMPLE_TEXT = 'This is a sample text for testing';
  static readonly SAMPLE_NUMBER = '12345';
  static readonly SAMPLE_DATE = '2024-12-31';
  static readonly SAMPLE_PASSWORD = 'TestPassword123!';

  // Dropdown Options
  static readonly DROPDOWN_OPTIONS = ['Option 1', 'Option 2'];

  // BMI Calculator Data
  static readonly BMI_DATA = {
    weight: '70',
    height: '170',
    expectedBMI: '24.2'
  };

  // Feedback Data
  static readonly FEEDBACK = {
    name: 'Test User',
    email: 'feedback@test.com',
    rating: '5',
    comments: 'Excellent automation practice website!'
  };
}