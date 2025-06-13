describe('Handle Child Window in Same Tab', () => {
    it('Opens child window in the same tab using stub', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Stub window.open and force it to visit the URL in the same window
      cy.window().then((win) => {
        cy.stub(win, 'open', (url) => {
          win.location.href = url; // redirect to the new window URL in same tab
        }).as('windowOpen');
      });
  
      // Click the button that triggers window.open()
      cy.get('#openwindow').click();
  
      // Now the child page is loaded in the same tab
      cy.url().should('include', 'rahulshettyacademy');
  
      // Do some validation or interaction on the new page
      cy.get('h1').should('contain', 'QA Click Academy');
    });
  });
  