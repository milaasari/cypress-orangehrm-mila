class ForgotPasswordPage {
    inputUsername(user) { 
        cy.get('[name="username"]').should('be.visible').type(user); 
    }

    clickReset() { 
    cy.get('[type="submit"]')
      .should('be.visible')
      .click({ force: true }); 
}
    clickCancel() { 
        cy.get('.oxd-button--ghost').should('be.visible').click(); 
    }
}
export default new ForgotPasswordPage();