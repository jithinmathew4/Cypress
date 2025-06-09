// cypress/e2e/dynamicDropdown.cy.js

describe('Dynamic Dropdown Handling on Rahul Shetty Academy', () => {
  it('Selects an option from the dynamic dropdown', () => {
    // Visit the website
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Type into the autocomplete input field
    cy.get('#autocomplete').type('ind');

    // Wait for the dropdown options to appear
    cy.wait(500); // Optional, to ensure dropdown is populated

    // Select the desired option from the dropdown
    cy.get('.ui-menu-item div').each(($el) => {
      if ($el.text() === 'India') {
        cy.wrap($el).click();
      }
    });

    // Assert that the selected value is displayed in the input field
    cy.get('#autocomplete').should('have.value', 'India');
  });
});