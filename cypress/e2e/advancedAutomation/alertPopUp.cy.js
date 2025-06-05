// cypress/e2e/alert.cy.js

describe('Handle Alert Pop-ups on Rahul Shetty Academy', () => {
    it('Handles alert pop-up', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Trigger the alert by clicking the button
      cy.get('#alertbtn').click();
  
      // Handle the alert pop-up
      cy.on('window:alert', (alertText) => {
        // Assert the alert text
        expect(alertText).to.equal('Hello , share this practice page and share your knowledge');
      });
    });
  
    it('Handles confirm pop-up', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Trigger the confirm pop-up by clicking the button
      cy.get('#confirmbtn').click();
  
      // Handle the confirm pop-up
      cy.on('window:confirm', (confirmText) => {
        // Assert the confirm text
        expect(confirmText).to.equal('Hello , Are you sure you want to confirm?');
  
        // Return true to simulate clicking "OK"
        return true;
      });
    });
  });