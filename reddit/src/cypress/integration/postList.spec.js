describe('Reddit App', () => {
    it('loads the posts list', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Reddit Posts').should('exist'); // Verify the heading exists
    });
  
    it('navigates to the detailed view', () => {
      cy.visit('http://localhost:3000');
      cy.get('a').first().click(); // Click the first post link
      cy.url().should('include', '/post/'); // Check if URL includes post ID
      cy.contains('Back').click(); // Click the Back button
      cy.url().should('eq', 'http://localhost:3000/'); // Verify back to the list
    });
  });