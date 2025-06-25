// cypress/e2e/confirmAlert.cy.js

describe('Handling Confirm Alert on Rahul Shetty Academy', () => {
    it('Handles JavaScript confirm alert', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Trigger the confirm alert by clicking the button
      cy.get('#confirmbtn').click();
  
      // Handle the confirm alert and verify its text
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal('Hello , Are you sure you want to confirm?');
        return true; // Simulates clicking "OK"
      });
  
      // Verify behavior after clicking "OK"
      cy.get('#confirmbtn').should('exist');
    });
  
    it('Handles JavaScript confirm alert with Cancel', () => {
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Trigger the confirm alert by clicking the button
      cy.get('#confirmbtn').click();
  
      // Handle the confirm alert and verify its text
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal('Hello , Are you sure you want to confirm?');
        return false; // Simulates clicking "Cancel"
      });
  
      // Verify behavior after clicking "Cancel"
      cy.get('#confirmbtn').should('exist');
    });
  });
  