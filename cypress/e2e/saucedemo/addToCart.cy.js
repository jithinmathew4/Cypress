describe('Sauce Demo Add to Cart Test', () => {
    beforeEach(() => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with valid credentials
      cy.get('[data-test="username"]').type('standard_user'); // Enter username
      cy.get('[data-test="password"]').type('secret_sauce'); // Enter password
      cy.get('[data-test="login-button"]').click(); // Click the login button
  
      // Verify we are on the inventory page
      cy.url().should('include', '/inventory.html');
    });
  
    it('should click the Add to Cart button for a product', () => {
      // Click the "Add to Cart" button for the first product
      cy.get('.inventory_item') // Locate all products
        .first() // Select the first product
        .find('button') // Find the "Add to Cart" button within the product
        .click(); // Click the button
  
      // Verify the button text changes to "Remove"
      cy.get('.inventory_item')
        .first()
        .find('button')
        .should('have.text', 'Remove');
  
      // Verify the cart badge shows 1 item
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
  });