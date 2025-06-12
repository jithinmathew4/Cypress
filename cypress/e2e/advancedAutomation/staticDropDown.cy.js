// cypress/e2e/invisibleElements.cy.js

describe('Handling Invisible Elements on Rahul Shetty Academy', () => {
    it('Interacts with an invisible element', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Verify that the element is initially invisible
      cy.get('#hide-textbox').click(); // Hide the textbox
      cy.get('#displayed-text').should('not.be.visible'); // Assert it's invisible
  
      // Make the element visible
      cy.get('#show-textbox').click(); // Show the textbox
      cy.get('#displayed-text').should('be.visible'); // Assert it's visible
  
      // Interact with the now-visible element
      cy.get('#displayed-text').type('Hello, World!').should('have.value', 'Hello, World!');
    });
  });
  