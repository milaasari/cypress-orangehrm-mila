class LoginPage {
    inputUsername = '[name="username"]';
    inputPassword = '[name="password"]';
    loginButton = '.oxd-button';
    alertMessage = '.oxd-alert';
    requiredLabel = '.oxd-input-group__message';
    forgotPasswordLink = '.orangehrm-login-forgot-header'; // Locator baru
    userDropdown = '.oxd-userdropdown-tab';                // Locator baru
    logoutLink = ':nth-child(4) > .oxd-userdropdown-link'; // Locator baru

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    fillUsername(username) {
        if (username) cy.get(this.inputUsername).type(username);
    }

    fillPassword(password) {
        if (password) cy.get(this.inputPassword).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    logout() {
        cy.get(this.userDropdown).click();
        cy.get(this.logoutLink).click();
    }

    clickForgotPassword() {
        cy.get(this.forgotPasswordLink).click();
    }
}

export const loginPage = new LoginPage();