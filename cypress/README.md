#!/bin/bash

# Create README.md file with content
cat <<EOL > README.md
# Cypress E2E Testing for Sauce Labs Demo

This project contains end-to-end tests for the Sauce Labs demo website using Cypress. The tests cover login functionality, cart operations, checkout process, and other key features of the application.

## Project Structure

\`\`\`
cypress/
├── e2e/                # Contains test files
│   ├── login.cy.js     # Tests for login functionality
│   ├── cart.cy.js      # Tests for cart functionality
│   ├── checkout.cy.js  # Tests for checkout process
├── fixtures/           # Test data (e.g., JSON files)
├── support/            # Custom commands and utilities
├── screenshots/        # Screenshots captured during test runs
├── videos/             # Videos recorded during test runs
\`\`\`

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd <project-directory>
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
\`\`\`bash
npx cypress open
\`\`\`
Select a test file from the Cypress Test Runner to execute tests interactively.

### Run Tests in Headless Mode
\`\`\`bash
npx cypress run
\`\`\`
This runs all tests in headless mode and outputs results in the terminal.

### Run Specific Test File
\`\`\`bash
npx cypress run --spec "cypress/e2e/<test-file-name>.cy.js"
\`\`\`
Replace \`<test-file-name>.cy.js\` with the name of the test file you want to run.

## Test Scenarios

### Login Tests
- Valid login
- Invalid login
- Empty fields

### Cart Functionality Tests
- Add items to the cart
- Remove items from the cart
- Verify cart persistence

### Checkout Tests
- Fill out checkout form
- Verify successful checkout

## Reporting

Test results are automatically saved as:
- **Screenshots**: Located in \`cypress/screenshots/\`
- **Videos**: Located in \`cypress/videos/\`

## Custom Commands

Custom commands are defined in \`cypress/support/commands.js\`. You can extend or modify them as needed.

## Add Commit change
git add .
git commit -m "Created README.md file"
git push origin main


## License

This project is licensed under the MIT License.
EOL

echo "README.md file created successfully!"