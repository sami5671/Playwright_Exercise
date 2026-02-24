# 🧪 Playwright Automation -- Automation Exercise Project

End-to-end UI test automation framework built using **Playwright +
TypeScript** following the **Page Object Model (POM)** design pattern.

This project automates UI scenarios for: 🌐
http://automationexercise.com

------------------------------------------------------------------------

## 🚀 Tech Stack

-   Playwright
-   TypeScript
-   Page Object Model (POM)
-   GitHub Actions CI/CD
-   HTML Reports
-   Video Recording on Failure
-   Trace on Failure

------------------------------------------------------------------------

## 📂 Project Structure

. ├── .github/workflows/ │ └── playwright.yml ├── pages/ │ ├──
HomePage.ts │ ├── ProductsPage.ts │ └── CartPage.ts ├── tests/ │ └──
addToCart.spec.ts ├── playwright.config.ts ├── package.json └──
README.md

------------------------------------------------------------------------

## 🧱 Framework Design

### 🔹 Page Object Model (POM)

Each page has its own class: - HomePage - ProductsPage - CartPage

Benefits: - Reusable methods - Clean separation of concerns - Scalable
architecture - Easy maintenance

------------------------------------------------------------------------

## 🧪 Automated Test Scenario

### ✅ Test Case: Add Multiple Products to Cart

Steps: 1. Launch browser 2. Navigate to homepage 3. Click on Products 4.
Add first product to cart 5. Continue shopping 6. Add second product to
cart 7. View cart 8. Verify: - Both products are visible - Correct price
displayed - Quantity is correct - Total price = Price × Quantity

------------------------------------------------------------------------

## ⚙️ Installation

Clone the repository:

git clone `<your-repo-url>`{=html} cd `<your-project-folder>`{=html}

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

------------------------------------------------------------------------

## ▶️ Run Tests Locally

Run all tests:

npx playwright test

Run in UI mode:

npx playwright test --ui

Run specific test:

npx playwright test tests/addToCart.spec.ts

------------------------------------------------------------------------

## 📊 View HTML Report

After execution:

npx playwright show-report

------------------------------------------------------------------------

## 🎥 Debugging Features

This framework automatically captures:

-   Screenshot (on failure)
-   Video (on failure)
-   Trace file (on failure)

To open trace:

npx playwright show-trace trace.zip

------------------------------------------------------------------------

## 🤖 CI/CD Integration (GitHub Actions)

Tests automatically run on: - Push to main - Pull request to main

Pipeline Steps: 1. Checkout repository 2. Install dependencies 3.
Install Playwright browsers 4. Run tests 5. Upload HTML report 6. Upload
videos & traces (if failed)

You can download reports from: GitHub → Actions → Workflow Run →
Artifacts

------------------------------------------------------------------------

## 🧠 Configuration Highlights

-   Headless mode in CI
-   Retries enabled only in CI
-   Workers optimized for CI stability
-   HTML + List reporter
-   Video & Trace retained on failure

------------------------------------------------------------------------

## 🏗️ Future Improvements

-   Multi-browser testing (Firefox/WebKit)
-   Parallel execution matrix in CI
-   Allure reporting integration
-   Dockerized execution
-   Slack notification on failure
-   Data-driven testing
-   API + UI hybrid testing

------------------------------------------------------------------------

## 🧑‍💻 Author

Sami Alam\
QA Automation Engineer \| Playwright \| TypeScript \| CI/CD

------------------------------------------------------------------------

## 📜 License

This project is for educational and demonstration purposes.

------------------------------------------------------------------------

⭐ If you found this project helpful, consider giving it a star!
