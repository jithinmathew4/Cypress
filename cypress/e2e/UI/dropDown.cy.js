describe('Dropdown Handling in Cypress', () => {
    it('Selects an option from a dropdown', () => {
        // Visit the page with the dropdown
        cy.visit('https://example.com');

        // Select an option by its value
        cy.get('select#dropdown-id').select('option-value');

        // Verify the selected option
        cy.get('select#dropdown-id').should('have.value', 'option-value');

        // Select an option by its visible text
        cy.get('select#dropdown-id').select('Option Text');

        // Verify the selected option
        cy.get('select#dropdown-id').should('contain', 'Option Text');
    });
});