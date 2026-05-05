describe('Feature: Login OrangeHRM - Mila Sari', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('TC-001: Login valid - Admin should redirect to dashboard', () => {
    cy.intercept('GET', '**/action-summary*').as('actionSummary');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait('@actionSummary');
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard');
  });

  it('TC-002: Login invalid - Wrong password should show error', () => {
    cy.intercept('POST', '**/validate').as('loginAttempt');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin124');
    cy.get('.oxd-button').click();
    cy.wait('@loginAttempt');
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials');
  });

  it('TC-003: Login invalid - Wrong username should show error', () => {
    cy.intercept('POST', '**/validate').as('loginAttempt');
    cy.get('[name="username"]').type('Mila');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait('@loginAttempt');
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials');
  });

  it('TC-004: Login empty - Empty fields should show required labels', () => {
    cy.intercept('POST', '**/validate').as('loginAttempt');    
    cy.get('button[type="submit"]').click();    
    cy.get('.oxd-input-group__message').should('have.length', 2).and('contain', 'Required');
  });

  it('TC-005: Login empty - Empty password should show required', () => {
    cy.get('[name="username"]').type('Admin');
    cy.get('.oxd-button').click();
    cy.get('.oxd-input-group__message').should('be.visible').and('contain', 'Required');
  });

  it('TC-006: Login empty - Empty username should show required', () => {
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-input-group__message').should('be.visible').and('contain', 'Required');
  });

  it('TC-007: Forgot Password - Should redirect to reset password page', () => {
    cy.intercept('GET', '**/requestPasswordResetCode*').as('resetPage');    
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get('.orangehrm-forgot-password-title').should('have.text', 'Reset Password');
  });

  it('TC-008: Security - Password field should have type password', () => {
    cy.get('[name="password"]').should('have.attr', 'type', 'password');
  });

  it('TC-009: Security - Capitalized credentials should show error', () => {
    cy.intercept('POST', '**/validate').as('loginAttempt');
    cy.get('[name="username"]').type('ADMIN');
    cy.get('[name="password"]').type('ADMIN123');
    cy.get('.oxd-button').click();
    cy.wait('@loginAttempt');
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials');
  });

  it('TC-010: UX - Username with leading/trailing spaces', () => {
    cy.intercept('POST', '**/validate').as('loginAttempt');
    cy.get('[name="username"]').type(' Admin '); 
    cy.get('[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginAttempt');
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials');
  });

});