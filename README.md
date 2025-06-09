**PROJECT SETUP**

**## 🚀 Prerequisites

- Node.js (v16+ recommended)
- NPM (v8+ recommended)
- Cypress installed (locally or globally)

---

## 📦 Installation

1️⃣ Clone the repository (if applicable)  
_or_ create a new project directory.

2️⃣ Install Cypress locally:

```bash
npm init -y
npm install cypress --save-dev
**

# Demoblaze Cypress Automation

This project contains Cypress UI automation test scripts for the [Demoblaze](https://www.demoblaze.com/) website.  
It automates:
- The **Sign Up a new user** functionality  
-The **Login with the new user** workflow  
-The **Add product to cart multiple times and check**   
---

## 📌 Project Structure
cypress/
e2e/
demoblazeTests_spec.cy
cypress.config.js
package.json
README.md

---

# 🐾 PetStore API Cypress Tests

This repository contains Cypress API automation tests for the [Swagger PetStore API](https://petstore.swagger.io/).  
The tests cover:

- ✅ Adding a new pet to the store
- ✅ Finding a pet by ID

**## 📂 Project Structure

```
cypress/
└── e2e/
    └── apiTests_demoBlaze_spec.cy.js   # API test file
README.md
package.json
cypress.config.js
```

---**

## 🚀 Running the Tests

### Open Cypress Test Runner (UI mode)

```bash
npx cypress open
```
- Select `pet_api_spec.cy.js` or demoblazeTests_spec.cy  from the test list in the Cypress app window.
- Click **Run** to execute the tests.
- Test execution details, logs, and assertions will be visible in the Cypress UI as the test runs.

---

### Run Tests in Headless Mode (CI/CLI)

```bash
npx cypress run --spec "cypress/e2e/apiTests_demoBlaze_spec.cy.js"

npx cypress run --spec "cypress/e2e/demoblazeTests_spec.cy"

```

**Output:**
- Console will display test status (`✓` for passed, `✖` for failed)
- Execution time and assertion details will be shown in the terminal log.



## ✨ Author

Automation by [Saranya] 🚀
