// cypress/e2e/sample-test.cy.js

describe('Sample Cypress Test', () => {
    it('should visit a website and verify the title', () => {
      // Visit the website
      cy.visit('https://example.cypress.io');
  
      // Verify the page title
      cy.title().should('include', 'Cypress');
    });
  
    it('should interact with an element', () => {
      // Visit the website
      cy.visit('https://example.cypress.io');
  
      // Click on the "type" link
      cy.contains('type').click();
  
      // Verify the URL includes '/commands/actions'
      cy.url().should('include', '/commands/actions');
  
      // Type into an input field and verify the value
      cy.get('.action-email')
        .type('test@example.com')
        .should('have.value', 'test@example.com');
    });
  });