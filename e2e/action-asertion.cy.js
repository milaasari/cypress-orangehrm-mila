describe('Praktek Action & Assertion', () => {
  it('Cek Halaman Login OrangeHRM', () => {
    // ACTION: Buka Web
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // ASSERTION: Cek Logo & Judul
    cy.get('.orangehrm-login-branding').should('be.visible');
    cy.get('.oxd-text--h5').should('have.text', 'Login');

    // ACTION: Isi Data
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');

    // ACTION: Klik Login
    cy.get('.oxd-button').click();

    // ASSERTION: Cek Dashboard
    cy.url().should('include', '/dashboard');
  });
});