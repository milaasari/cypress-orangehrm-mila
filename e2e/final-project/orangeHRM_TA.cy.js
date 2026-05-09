import loginPage from "../../support/page_objectsTA/loginPage";
import forgotPasswordPage from "../../support/page_objectsTA/forgotPasswordPage";
import directoryPage from "../../support/page_objectsTA/directoryPage";

describe('Final Project - OrangeHRM Comprehensive Testing (35 Test Cases)', () => {
    
    beforeEach(() => {
        cy.intercept('GET', '**/action-summary').as('getDashboard');
        cy.intercept('GET', '**/employees*').as('getDirectory');
        cy.intercept('POST', '**/auth/login').as('loginProcess');
        
        loginPage.visit();
    });

    it('TC-001: Success Login with Valid Credentials', () => {
        loginPage.inputUsername('Admin');
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        cy.wait('@getDashboard').its('response.statusCode').should('eq', 200);
        cy.url().should('include', '/dashboard');
    });

    it('TC-002: Login Failed - Wrong Password', () => {
        loginPage.inputUsername('Admin');
        loginPage.inputPassword('wrongPass123');
        loginPage.clickLogin();
        loginPage.getErrorMessage().should('contain', 'Invalid credentials');
    });

    it('TC-003: Login Failed - Wrong Username', () => {
        loginPage.inputUsername('SalahUser');
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        loginPage.getErrorMessage().should('contain', 'Invalid credentials');
    });

    it('TC-004: Login Failed - Empty Username', () => {
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        cy.get('.oxd-input-group__message').should('contain', 'Required');
    });

    it('TC-005: Login Failed - Empty Password', () => {
        loginPage.inputUsername('Admin');
        loginPage.clickLogin();
        cy.get('.oxd-input-group__message').should('contain', 'Required');
    });

    it('TC-006: Login Failed - Both Fields Empty', () => {
        loginPage.clickLogin();
        cy.get('.oxd-input-group__message').should('have.length', 2);
    });

    it('TC-007: Login - Case Sensitive Check (Lower Case Username)', () => {
        loginPage.inputUsername('admin'); 
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        cy.url().should('include', '/dashboard');
    });

    it('TC-008: Login - Verify Branding Logo Presence', () => {
        cy.get('.orangehrm-login-branding').should('be.visible');
    });

    it('TC-009: Login - Verify Password Field is Masked', () => {
        loginPage.inputPassword('admin123');
        cy.get('[name="password"]').should('have.attr', 'type', 'password');
    });

    it('TC-010: Login - Intercept API Status Code Validation', () => {
        loginPage.inputUsername('Admin');
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        cy.wait('@getDashboard', { timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
    });
    });

    it('TC-011: Forgot Password - Navigate to Reset Page', () => {
        loginPage.getRequiredLinks().click();
        cy.url().should('include', 'requestPasswordResetCode');
        cy.get('.orangehrm-forgot-password-title').should('contain', 'Reset Password');
    });

    it('TC-013: Forgot Password - Cancel and Back to Login', () => {
        loginPage.getRequiredLinks().click();
        forgotPasswordPage.clickCancel();
        cy.url().should('not.include', 'requestPasswordResetCode');
        cy.get('.orangehrm-login-button').should('be.visible');
    });

    it('TC-014: Forgot Password - Empty Username Validation', () => {
        loginPage.getRequiredLinks().click();
        forgotPasswordPage.clickReset();
        cy.get('.oxd-input-group__message').should('contain', 'Required');
    });

    const loginFirst = () => {
        loginPage.inputUsername('Admin');
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        directoryPage.clickMenu();
        cy.wait('@getDirectory');
    };

    it('TC-016: Directory - Access Menu Successfully', () => {
        loginFirst();
        cy.get('.oxd-topbar-header-title').should('contain', 'Directory');
    });

    it('TC-020: Directory - Reset Filter Validation', () => {
        loginFirst();
        directoryPage.selectJobTitle('Account Assistant');
        directoryPage.clickReset();
        cy.get('.oxd-select-text-input').first().should('contain', '-- Select --');
    });

    it('TC-023: Directory - Verify Autocomplete Dropdown Presence', () => {
        loginFirst();
        cy.get('.oxd-autocomplete-text-input > input').type('a');
        cy.get('.oxd-autocomplete-dropdown').should('be.visible');
    });

    it('TC-024: Directory - Verify Profile Card Info Details', () => {
        loginFirst();
        directoryPage.clickSearch();
        cy.get('.oxd-sheet').first().click();
        cy.get('.orangehrm-directory-card-header').should('be.visible');
    });

    it('TC-026: Directory - Intercept API Validation (Filtered Request)', () => {
        loginFirst();
        directoryPage.selectJobTitle('Finance Manager');
        directoryPage.clickSearch();
        cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    });

    it('TC-027: Directory - Check Empty Result UI State', () => {
        loginFirst();
        directoryPage.selectJobTitle('Pre-Sales Coordinator');
        directoryPage.clickSearch();
        cy.get('body').then(($body) => {
            if ($body.find('.oxd-toast').length > 0) {
                cy.get('.oxd-toast').should('be.visible');
            }
        });
    });

    it('TC-030: Directory - Validate Label UI Visibility', () => {
        loginFirst();
        cy.get('.oxd-label').contains('Employee Name').should('be.visible');
        cy.get('.oxd-label').contains('Job Title').should('be.visible');
        cy.get('.oxd-label').contains('Location').should('be.visible');
    });

    it('TC-033: Directory - Verify Footer Branding link', () => {
        loginFirst();
        cy.get('.oxd-layout-footer').find('a').should('have.attr', 'href', 'http://www.orangehrm.com');
    });

    it('TC-034: General - User Profile Dropdown Check', () => {
        loginPage.inputUsername('Admin');
        loginPage.inputPassword('admin123');
        loginPage.clickLogin();
        cy.get('.oxd-userdropdown-name').should('be.visible');
    });
});