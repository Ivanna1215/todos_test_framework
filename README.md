# todo

This  test project is a test automation suite for todo
## Getting started
To get started with this project, follow these steps:
Install Node.js
Install Cypress via npm: npm install cypress
Clone this repository to your local machine
Install dependencies by running: npm install

## Execution
### Build and open Cypress Test Runner
1. Install dependencies within the project directory (allo folder on your local)
    `npm install`

2. Modify the cypress.config.js file to use 'https://allo.ua/' as the baseUrl
3. Execute cypress on your local: 

     `npm run cy:open`
     
4. After the Cypress Test Runner application loads, you can select some or all test specs to be executed.

### Running headless cypress that generates reports
1. Modify the cypress.config.js file to use 'https://allo.ua/' as the baseUrl
2. Execute cypress automated tests in headless mode: 

     `npm run cy:run`
     

### Useful Information:
Test files are located in the cypress/e2e/todo.cy.js.
Test data is stored in the cypress/fixtures directory.
Test configuration settings can be found in the cypress.config.json file.
Additional Cypress commands and usage information can be found in the official documentation.
