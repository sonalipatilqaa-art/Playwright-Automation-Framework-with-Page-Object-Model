# Playwright Automation Framework with Page Object Model

## 🎯 Project Overview

Comprehensive test automation framework built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern. This framework automates **80+ test scenarios** on [practice.expandtesting.com](https://practice.expandtesting.com) - a practice website for automation testing.

## 🏗️ Framework Architecture

### Technology Stack
- **Playwright**: v1.48.0 - Modern end-to-end testing framework
- **TypeScript**: v5.6.0 - Type-safe programming
- **Node.js**: Runtime environment
- **Allure Reports**: Advanced reporting with screenshots and videos

### Design Pattern
- **Page Object Model (POM)**: Separates page elements and test logic for better maintainability
- **Modular Architecture**: Reusable components and utilities
- **Data-Driven**: External test data management

## 📁 Project Structure

```
automation-framework/
├── pages/                          # Page Object Models
│   ├── base/
│   │   └── BasePage.ts            # Base page with common methods
│   ├── auth/                      # Authentication pages
│   │   ├── LoginPage.ts
│   │   ├── RegisterPage.ts
│   │   └── ForgotPasswordPage.ts
│   ├── forms/                     # Form pages
│   │   ├── WebInputsPage.ts
│   │   ├── FormValidationPage.ts
│   │   ├── RadioButtonsPage.ts
│   │   ├── CheckboxesPage.ts
│   │   ├── DropdownPage.ts
│   │   └── FileUploadPage.ts
│   ├── tables/                    # Table pages
│   │   ├── DynamicTablePage.ts
│   │   ├── DynamicPaginationTablePage.ts
│   │   └── SortableTablesPage.ts
│   ├── interactions/              # Interaction pages
│   │   ├── DragAndDropPage.ts
│   │   ├── HoversPage.ts
│   │   └── HorizontalSliderPage.ts
│   ├── windows/                   # Window/Frame pages
│   │   ├── IFramePage.ts
│   │   └── MultipleWindowsPage.ts
│   ├── advanced/                  # Advanced scenario pages
│   │   ├── JSDialogsPage.ts
│   │   ├── DynamicControlsPage.ts
│   │   ├── NotificationMessagePage.ts
│   │   └── AddRemoveElementsPage.ts
│   └── applications/              # Full application pages
│
├── tests/                         # Test specifications
│   ├── auth/                     # Authentication tests
│   ├── forms/                    # Form tests
│   ├── tables/                   # Table tests
│   ├── interactions/             # Interaction tests
│   ├── windows/                  # Window/Frame tests
│   ├── advanced/                 # Advanced tests
│   ├── applications/             # Application tests
│   └── api/                      # API tests
│
├── utils/                        # Utility functions
│   ├── constants/
│   │   ├── urls.ts              # URL constants
│   │   ├── test-data.ts         # Test data
│   │   └── selectors.ts         # Common selectors
│   └── helpers/
│       ├── wait-helper.ts       # Wait utilities
│       └── action-helper.ts     # Action utilities
│
├── reports/                      # Test reports
│   └── html-report/             # HTML reports
├── allure-results/              # Allure results
├── allure-report/               # Allure reports
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd automation-framework
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   yarn install:browsers
   # or
   npx playwright install
   ```

## 🧪 Running Tests

### Run All Tests
```bash
yarn test
# or
npm test
```

### Run Tests by Browser
```bash
# Chrome
yarn test:chrome

# Firefox
yarn test:firefox

# Safari (WebKit)
yarn test:webkit

# All browsers
yarn test:all-browsers
```

### Run Tests by Category
```bash
# Authentication tests
yarn test:auth

# Form tests
yarn test:forms

# Table tests
yarn test:tables

# Interaction tests
yarn test:interactions

# Application tests
yarn test:applications

# API tests
yarn test:api
```

### Run Specific Test File
```bash
npx playwright test tests/auth/login.spec.ts
```

### Run Tests in Headed Mode (See Browser)
```bash
yarn test:headed
```

### Debug Tests
```bash
yarn test:debug
```

## 📊 Reports

### View HTML Report
```bash
yarn report
# or
npx playwright show-report
```

### Generate Allure Report
```bash
# Generate report
yarn allure:generate

# Open report
yarn allure:open
```

## 🧩 Test Coverage

### Authentication & Authorization (6 scenarios)
- ✅ Login with valid/invalid credentials
- ✅ User registration
- ✅ Forgot password
- ✅ OTP login
- ✅ Basic authentication
- ✅ Digest authentication

### Forms & Input Elements (15+ scenarios)
- ✅ Web inputs (text, number, password, date)
- ✅ Form validation
- ✅ Radio buttons
- ✅ Checkboxes
- ✅ Dropdown menus
- ✅ Autocomplete
- ✅ File upload/download

### Tables (8 scenarios)
- ✅ Dynamic tables
- ✅ Pagination tables
- ✅ Sortable tables
- ✅ Challenging DOM
- ✅ Large DOM
- ✅ Shadow DOM

### User Interactions (12+ scenarios)
- ✅ Drag and drop
- ✅ Hover actions
- ✅ Key presses
- ✅ Context menu
- ✅ Horizontal slider
- ✅ Infinite scroll
- ✅ Scrollbars

### Windows & Frames (4 scenarios)
- ✅ IFrames
- ✅ Multiple windows
- ✅ Tooltips
- ✅ Modal dialogs

### Advanced Scenarios (15+ scenarios)
- ✅ JavaScript dialogs (Alert, Confirm, Prompt)
- ✅ Dynamic controls
- ✅ Dynamic loading
- ✅ Notification messages
- ✅ Add/Remove elements
- ✅ Geolocation
- ✅ Redirects

### Full Applications (7 apps)
- ✅ Notes App (React)
- ✅ Web Parking
- ✅ BMI Calculator
- ✅ Bookstore E-commerce
- ✅ Cars Showroom
- ✅ Calorie Tracker
- ✅ Color Wheel

### API Testing
- ✅ REST API endpoints
- ✅ Health check API
- ✅ Notes API

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)

- **Parallel Execution**: Tests run in parallel for faster execution
- **Retries**: Failed tests retry 2 times on CI
- **Multiple Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Testing**: Mobile Chrome and Safari
- **Screenshots**: Captured on failure
- **Videos**: Recorded on failure
- **Traces**: Collected on retry

### TypeScript Configuration (`tsconfig.json`)

- Strict type checking enabled
- Path aliases for cleaner imports
- ES Module support

## 📝 Writing New Tests

### 1. Create Page Object Model

```typescript
// pages/example/ExamplePage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLs } from '../../utils/constants/urls';

export class ExamplePage extends BasePage {
  private exampleButton: Locator;

  constructor(page: Page) {
    super(page);
    this.exampleButton = page.locator('#example-button');
  }

  async navigate(): Promise<void> {
    await this.goto(URLs.BASE_URL + '/example');
  }

  async clickExampleButton(): Promise<void> {
    await this.actionHelper.click(this.exampleButton);
  }
}
```

### 2. Create Test Specification

```typescript
// tests/example/example.spec.ts
import { test, expect } from '@playwright/test';
import { ExamplePage } from '../../pages/example/ExamplePage';

test.describe('Example Page Tests', () => {
  let examplePage: ExamplePage;

  test.beforeEach(async ({ page }) => {
    examplePage = new ExamplePage(page);
    await examplePage.navigate();
  });

  test('should perform example action', async () => {
    await examplePage.clickExampleButton();
    // Add assertions
  });
});
```

## 🎯 Best Practices

1. **Use Page Object Model**: Keep page elements and test logic separated
2. **Wait Strategies**: Use appropriate wait helpers instead of hard waits
3. **Data-Driven**: Store test data in constants files
4. **Assertions**: Use meaningful assertions with clear messages
5. **Test Independence**: Each test should be independent and can run in any order
6. **Clean Code**: Follow TypeScript/JavaScript best practices
7. **Comments**: Add comments for complex logic
8. **Naming**: Use descriptive names for tests and methods

## 🐛 Debugging

### Debug Single Test
```bash
npx playwright test tests/auth/login.spec.ts --debug
```

### Playwright Inspector
Playwright provides an inspector tool that opens automatically in debug mode.

### VS Code Debugging
Add breakpoints in VS Code and use the Playwright Test extension.

## 📈 CI/CD Integration

The framework is ready for CI/CD integration with:
- GitHub Actions
- Jenkins
- GitLab CI
- CircleCI
- Azure DevOps

## 🤝 Contributing

1. Create a new branch for your feature
2. Write tests following the existing patterns
3. Ensure all tests pass
4. Submit a pull request

## 📄 License

MIT License

## 👤 Author

Automation Engineer

## 🔗 Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Practice Website](https://practice.expandtesting.com)
- [Allure Reports](https://docs.qameta.io/allure/)

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy Testing! 🚀**
