/**
 * Common Selectors used across the application
 */
export class Selectors {
  // Common Elements
  static readonly SUBMIT_BUTTON = 'button[type="submit"]';
  static readonly CANCEL_BUTTON = 'button[type="button"]';
  static readonly SUCCESS_MESSAGE = '.alert-success, .success-message';
  static readonly ERROR_MESSAGE = '.alert-danger, .error-message, .alert-error';
  static readonly INFO_MESSAGE = '.alert-info';
  static readonly WARNING_MESSAGE = '.alert-warning';

  // Login Page
  static readonly LOGIN_USERNAME = '#username';
  static readonly LOGIN_PASSWORD = '#password';
  static readonly LOGIN_BUTTON = 'button[type="submit"]';
  static readonly LOGOUT_BUTTON = 'a[href="/logout"]';

  // Form Elements
  static readonly INPUT_TEXT = 'input[type="text"]';
  static readonly INPUT_NUMBER = 'input[type="number"]';
  static readonly INPUT_PASSWORD = 'input[type="password"]';
  static readonly INPUT_EMAIL = 'input[type="email"]';
  static readonly INPUT_DATE = 'input[type="date"]';
  static readonly TEXTAREA = 'textarea';
  static readonly CHECKBOX = 'input[type="checkbox"]';
  static readonly RADIO_BUTTON = 'input[type="radio"]';
  static readonly FILE_INPUT = 'input[type="file"]';
  static readonly SELECT_DROPDOWN = 'select';

  // Table Elements
  static readonly TABLE = 'table';
  static readonly TABLE_HEADER = 'thead';
  static readonly TABLE_BODY = 'tbody';
  static readonly TABLE_ROW = 'tr';
  static readonly TABLE_CELL = 'td';
  static readonly TABLE_HEADER_CELL = 'th';

  // Modal & Dialog
  static readonly MODAL = '.modal, [role="dialog"]';
  static readonly MODAL_CLOSE = '.modal-close, .close';
  static readonly ALERT_DIALOG = 'alert';
  static readonly CONFIRM_DIALOG = 'confirm';
  static readonly PROMPT_DIALOG = 'prompt';

  // Navigation
  static readonly NAV_BAR = 'nav, .navbar';
  static readonly NAV_LINK = 'a.nav-link';
  static readonly BREADCRUMB = '.breadcrumb';

  // Loading & Progress
  static readonly LOADING_SPINNER = '.spinner, .loading';
  static readonly PROGRESS_BAR = '.progress-bar';
}