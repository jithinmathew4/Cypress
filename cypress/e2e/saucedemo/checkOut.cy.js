describe('Checkout Process in Sauce Labs Demo', () => {
    it('Adds an item to the cart and completes the checkout process', () => {
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
  
      // Proceed to checkout
      cy.get('#checkout').click();
  
      // Fill out the checkout information
      cy.get('#first-name').type('John');   // Enter first name
      cy.get('#last-name').type('Doe');     // Enter last name
      cy.get('#postal-code').type('12345'); // Enter postal code
  
      // Continue to the next step
      cy.get('#continue').click();
  
      // Verify the checkout overview page
      cy.url().should('include', '/checkout-step-two.html');
  
      // Finish the checkout process
      cy.get('#finish').click();
  
      // Verify the checkout completion page
      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    });
  });describe('Add Item to Cart and Complete Checkout in Sauce Labs Demo', () => {
  it('Adds an item to the cart and completes the checkout process', () => {
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

    // Proceed to checkout
    cy.get('#checkout').click();

    // Fill out the checkout information
    cy.get('#first-name').type('John');   // Enter first name
    cy.get('#last-name').type('Doe');     // Enter last name
    cy.get('#postal-code').type('12345'); // Enter postal code

    // Continue to the next step
    cy.get('#continue').click();

    // Verify the checkout overview page
    cy.url().should('include', '/checkout-step-two.html');

    // Finish the checkout process
    cy.get('#finish').click();

    // Verify the checkout completion page
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});