# 🧪 Playwright Automation --- Automation Exercise Project

![Automation Exercise Homepage](./docs/homepage.png)

> End-to-end UI test automation framework built using **Playwright +
> TypeScript** following the **Page Object Model (POM)** design pattern.

This project automates UI scenarios for:

🌐 http://automationexercise.com

------------------------------------------------------------------------

## 🚀 Tech Stack

-   ✅ Playwright
-   ✅ TypeScript
-   ✅ Page Object Model (POM)
-   ✅ GitHub Actions (CI/CD)
-   ✅ HTML Reporting
-   ✅ Video Recording (on failure)
-   ✅ Trace Viewer (on failure)

------------------------------------------------------------------------

## 📂 Project Structure

``` bash
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── HomePage.ts
│   ├── ProductsPage.ts
│   └── CartPage.ts
├── tests/
│   └── addToCart.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

------------------------------------------------------------------------

## 🧱 Framework Design

### 🔹 Page Object Model (POM)

Each page has its own class:

-   `HomePage`
-   `ProductsPage`
-   `CartPage`

### ✅ Benefits

-   Reusable methods
-   Clean separation of concerns
-   Scalable architecture
-   Easy maintenance
-   Interview-ready structure

------------------------------------------------------------------------

## 🧪 Automated Test Scenario

### ✅ Test Case: Add Multiple Products to Cart

### Steps:

1.  Launch browser
2.  Navigate to homepage
3.  Click on **Products**
4.  Add first product to cart
5.  Click **Continue Shopping**
6.  Add second product to cart
7.  Click **View Cart**
8.  Verify:
    -   Both products are visible
    -   Correct price displayed
    -   Quantity is correct
    -   Total price = Price × Quantity

------------------------------------------------------------------------

## ⚙️ Installation

Clone the repository:

``` bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-project-folder>
```

Install dependencies:

``` bash
npm install
```

Install Playwright browsers:

``` bash
npx playwright install
```

------------------------------------------------------------------------

## ▶️ Run Tests Locally

Run all tests:

``` bash
npx playwright test
```

Run in headed mode (for debugging):

``` bash
npx playwright test --headed
```

Run with UI mode:

``` bash
npx playwright test --ui
```

Run a specific test:

``` bash
npx playwright test tests/addToCart.spec.ts
```

------------------------------------------------------------------------

## 📊 View HTML Report

After test execution:

``` bash
npx playwright show-report
```

------------------------------------------------------------------------

## 🎥 Debugging Features

This framework automatically captures:

-   📸 Screenshot (on failure)
-   🎥 Video (on failure)
-   🧵 Trace file (on failure)

To open trace file:

``` bash
npx playwright show-trace trace.zip
```

------------------------------------------------------------------------

## 🤖 CI/CD Integration (GitHub Actions)

Tests automatically run on:

-   ✅ Push to `main`
-   ✅ Pull request to `main`

### 🔄 Pipeline Workflow

1.  Checkout repository
2.  Setup Node.js
3.  Install dependencies
4.  Install Playwright browsers
5.  Run tests
6.  Upload HTML report
7.  Upload videos & traces (if failed)

### 📥 Download Artifacts

Go to:

GitHub → Actions → Workflow Run → Artifacts

------------------------------------------------------------------------

## 🧠 Configuration Highlights

-   Headless mode enabled in CI
-   Retries enabled only in CI
-   Workers optimized for CI stability
-   HTML + List reporter
-   Video & Trace retained on failure

------------------------------------------------------------------------

## 🏗️ Future Improvements

-   [ ] Multi-browser testing (Firefox / WebKit)
-   [ ] Parallel execution matrix in CI
-   [ ] Allure reporting integration
-   [ ] Dockerized execution
-   [ ] Slack notifications on failure
-   [ ] Data-driven testing
-   [ ] API + UI hybrid testing

------------------------------------------------------------------------

## 🧑‍💻 Author

**Sami Alam**\
QA Automation Engineer \| Playwright \| TypeScript \| CI/CD

------------------------------------------------------------------------

## 📜 License

This project is for educational and demonstration purposes.

------------------------------------------------------------------------

⭐ If you found this project helpful, consider giving it a star!
