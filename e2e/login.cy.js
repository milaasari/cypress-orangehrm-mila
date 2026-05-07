import { loginPage } from "../support/page_objects/loginPage";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Tugas 17: Login OrangeHRM with POM', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('TC-001: Login Valid', () => {
        loginPage.fillUsername('Admin');
        loginPage.fillPassword('admin123');
        loginPage.clickLogin();
        cy.url().should('include', '/dashboard');
    });

    it('TC-002: Login Invalid Password', () => {
        loginPage.fillUsername('Admin');
        loginPage.fillPassword('salah123');
        loginPage.clickLogin();
        cy.get(loginPage.alertMessage).should('be.visible');
    });

    it('TC-003: Login Empty Fields', () => {
        loginPage.clickLogin();
        cy.get(loginPage.requiredLabel).should('have.length', 2);
    });

    it('TC-004: Login Empty Username', () => {
        loginPage.fillPassword('admin123');
        loginPage.clickLogin();
        cy.get(loginPage.requiredLabel).should('be.visible').and('contain', 'Required');
    });

    it('TC-005: Login Empty Password', () => {
        loginPage.fillUsername('Admin');
        loginPage.clickLogin();
        cy.get(loginPage.requiredLabel).should('be.visible').and('contain', 'Required');
    });
    
    it('TC-006: Logout - Should return to login page after logout', () => {
        loginPage.fillUsername('Admin');
        loginPage.fillPassword('admin123');
        loginPage.clickLogin();
        loginPage.logout();
        cy.url().should('include', '/login');
        cy.get(loginPage.loginButton).should('be.visible');
    });

    it('TC-007: Forgot Password - Should navigate to reset password page', () => {
        loginPage.clickForgotPassword();
        cy.url().should('include', '/requestPasswordResetCode');
        cy.contains('Reset Password').should('be.visible');
    });
});