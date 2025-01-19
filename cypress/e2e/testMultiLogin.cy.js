// In your support/commands.js file
import Papa from 'papaparse';

Cypress.Commands.add('parseCSV', (filePath) => {
  cy.fixture(filePath).then((fileContent) => {
    return new Cypress.Promise((resolve) => {
      Papa.parse(fileContent, {
        header: true,
        dynamicTyping: true,
        complete: (result) => resolve(result.data),
      });
    });
  });
});

// In your test file
describe('Bulk Data-Driven Tests with CSV Data', () => {
  it('should login with different users from CSV', function () {
    cy.parseCSV('loginData.csv').then((testData) => {
      testData.forEach((data) => {

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
   
        cy.get('#input-firstname').type(data.firstname);
        cy.get('#input-lastname').type(data.lastname);
        cy.get('#input-email').type(data.email);
        cy.get('#input-telephone').type(data.telephone);
        cy.get('#input-password').type(data.password);
        cy.get('#input-confirm').type(data.cpassword);
        cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)').click();
        cy.get('#content > form > div > div > input.btn.btn-primary').click();
        cy.contains(data.expectedMessage).should('be.visible');
        cy.get('#top-links > ul > li.dropdown > a').click();
        cy.get('#top-links > ul > li.dropdown.open > ul > li:nth-child(5) > a').click();

        /*
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

        cy.get('#input-email').type(data.username);
        cy.get('#input-password').type(data.password);
        cy.get('#content > div > div:nth-child(2) > div > form > input').click();
        cy.get('#top-links > ul > li.dropdown > a').click();
        cy.get('#top-links > ul > li.dropdown.open > ul > li:nth-child(5) > a').click();
        
        // Assert that the expected message appears after login
        cy.contains(data.expectedMessage).should('be.visible');
        cy.get('#content > div > div > a').click();
        */
       
      });
    });
  });
});
