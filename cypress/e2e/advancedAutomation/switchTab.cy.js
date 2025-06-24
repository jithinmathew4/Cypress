// cypress/e2e/switchTab.cy.js

describe('Handling Switch Tab on Rahul Shetty Academy', () => {
    it('Simulates switching to a new tab', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Remove the target attribute to force the link to open in the same tab
      cy.get('#opentab').invoke('removeAttr', 'target').click();
  
      // Verify the new page URL
      cy.url().should('include', 'https://www.qaclickacademy.com');
  
      // Perform actions on the new page (if needed)
      cy.get('.navbar-brand').should('be.visible');
  
      // Navigate back to the original page
      cy.go('back');
  
      // Verify the original page URL
      cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/');
    });
  });
  