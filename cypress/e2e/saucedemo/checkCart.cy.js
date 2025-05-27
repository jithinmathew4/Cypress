describe('Cart Functionality Tests in Sauce Labs Demo', () => {
    beforeEach(() => {
      // Visit the Sauce Labs demo website and log in before each test
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user'); // Enter username
      cy.get('#password').type('secret_sauce');  // Enter password
      cy.get('#login-button').click();           // Click login button
      cy.url().should('include', '/inventory.html'); // Verify successful login
    });
  
    it('Adds multiple items to the cart and verifies the cart count', () => {
      // Add multiple items to the cart
      cy.get('.inventory_item').eq(0).find('.btn_inventory').click(); // Add first item
      cy.get('.inventory_item').eq(1).find('.btn_inventory').click(); // Add second item
  
      // Verify the cart count
      cy.get('.shopping_cart_badge').should('have.text', '2');
    });
  
    it('Removes items from the cart and verifies the cart is empty', () => {
      // Add an item to the cart
      cy.get('.inventory_item').eq(0).find('.btn_inventory').click(); // Add first item
  
      // Navigate to the cart page
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html'); // Verify cart page
  
      // Remove the item from the cart
      cy.get('.cart_item').find('.cart_button').click(); // Click "Remove" button
  
      // Verify the cart is empty
      cy.get('.cart_item').should('not.exist');
      cy.get('.shopping_cart_badge').should('not.exist'); // No cart badge
    });
  
    it('Verifies cart persistence after navigation', () => {
      // Add an item to the cart
      cy.get('.inventory_item').eq(0).find('.btn_inventory').click(); // Add first item
  
      // Navigate to another page (e.g., cart page)
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html'); // Verify cart page
  
      // Navigate back to the products page
      cy.get('#continue-shopping').click();
      cy.url().should('include', '/inventory.html'); // Verify products page
  
      // Verify the cart still contains the item
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
  });