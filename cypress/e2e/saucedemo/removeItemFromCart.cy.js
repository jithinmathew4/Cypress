describe('Add and Remove Item from Cart in Sauce Labs Demo', () => {
    it('Adds an item to the cart and removes it', () => {
        // Visit the Sauce Labs demo website
        cy.visit('https://www.saucedemo.com');

        // Log in with valid credentials
        cy.get('#user-name').type('standard_user'); // Enter username
        cy.get('#password').type('secret_sauce');  // Enter password
        cy.get('#login-button').click();           // Click login button

        // Verify successful login by checking the URL
        cy.url().should('include', '/inventory.html');

        // Add an item to the cart
        cy.get('.inventory_item').first().within(() => {
            cy.get('.btn_inventory').click(); // Click "Add to cart" button for the first item
        });

        // Navigate to the cart page
        cy.get('.shopping_cart_link').click();

        // Verify the cart page URL
        cy.url().should('include', '/cart.html');

        // Verify the item is in the cart
        cy.get('.cart_item').should('have.length', 1); // Ensure one item is in the cart

        // Remove the item from the cart
        cy.get('.cart_item').first().within(() => {
            cy.get('.cart_button').click(); // Click "Remove" button
        });

        // Verify the cart is empty
        cy.get('.cart_item').should('not.exist'); // Ensure no items are in the cart
    });
});