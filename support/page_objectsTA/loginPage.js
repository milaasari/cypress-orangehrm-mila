class LoginPage {
    visit() { 
        cy.visit('https://opensource-demo.orangehrmlive.com/'); 
    }
    
    inputUsername(user) { 
        cy.get('[name="username"]', { timeout: 10000 }).should('be.visible').type(user); 
    }
    
    inputPassword(pass) { 
        cy.get('[name="password"]', { timeout: 10000 }).should('be.visible').type(pass); 
    }
    
    clickLogin() { 
        cy.get('[type="submit"]', { timeout: 10000 }).should('be.visible').click(); 
    }
    
    getErrorMessage() { 
        return cy.get('.oxd-alert-content-text'); 
    }
    
    getRequiredLinks() {
    return cy.contains(/forgot your password/i, { timeout: 20000 });
}
    logout() {
        cy.get('.oxd-userdropdown-name').should('be.visible').click();
        cy.get('.oxd-userdropdown-link').contains('Logout').click();
    }
}
export default new LoginPage();