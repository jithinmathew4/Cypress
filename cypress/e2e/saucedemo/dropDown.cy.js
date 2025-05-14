describe('Handle Dropdown in Sauce Labs Demo', () => {
    it('Selects an option from the sorting dropdown', () => {
        // Visit the Sauce Labs demo website
        cy.visit('https://www.saucedemo.com');

        // Log in with valid credentials
        cy.get('#user-name').type('standard_user'); // Enter username
        cy.get('#password').type('secret_sauce');  // Enter password
        cy.get('#login-button').click();           // Click login button

        // Verify successful login by checking the URL
        cy.url().should('include', '/inventory.html');

        // Interact with the sorting dropdown
        cy.get('.product_sort_container').select('Price (low to high)'); // Select by visible text

        // Verify the selected option
        cy.get('.product_sort_container').should('have.value', 'lohi'); // Verify the value of the selected option
    });
});