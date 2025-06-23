// cypress/e2e/switchWindow.cy.js

describe('Handling Switch Window on Rahul Shetty Academy', () => {
    it('Simulates switching to a new window', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Remove the target attribute to force the link to open in the same tab
      cy.get('#openwindow').invoke('removeAttr', 'target').click();
  
      // Verify the new page URL
      cy.url().should('include', 'https://www.qaclickacademy.com/');
  
      // Perform actions on the new page (if needed)
      cy.get('.navbar-brand').should('be.visible');
    });
  });
  