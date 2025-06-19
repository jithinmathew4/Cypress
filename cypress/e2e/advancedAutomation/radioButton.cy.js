// cypress/e2e/radioButton.cy.js

describe('Handling Radio Buttons on Rahul Shetty Academy', () => {
    it('Selects and verifies radio buttons', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Select the first radio button and verify it is selected
      cy.get('input[value="radio1"]').check().should('be.checked');
  
      // Verify other radio buttons are not selected
      cy.get('input[value="radio2"]').should('not.be.checked');
      cy.get('input[value="radio3"]').should('not.be.checked');
  
      // Select the second radio button and verify it is selected
      cy.get('input[value="radio2"]').check().should('be.checked');
  
      // Verify the first and third radio buttons are not selected
      cy.get('input[value="radio1"]').should('not.be.checked');
      cy.get('input[value="radio3"]').should('not.be.checked');
    });
  });