class DirectoryPage {
    clickMenu() { cy.get(':nth-child(9) > .oxd-main-menu-item').click(); }
    inputName(name) {
        cy.get('.oxd-autocomplete-text-input > input').type(name);
        cy.get('.oxd-autocomplete-dropdown', {timeout: 10000})
          .should('be.visible')
          .contains(name)
          .click();
    }

    selectLocation(location) {
        cy.get('.oxd-select-text').eq(1).click();
        cy.get('.oxd-select-dropdown').contains(location).click();
    }

    selectJobTitle(title) {
        cy.get('.oxd-select-text').eq(0).click();
        cy.get('.oxd-select-dropdown').contains(title).click();
    }

    clickSearch() { cy.get('[type="submit"]').click(); }
    clickReset() {
        cy.get('.oxd-button--ghost').click();
    }

    getRecordFound() {
        return cy.get('.orangehrm-horizontal-padding > .oxd-text');
    }
}

export default new DirectoryPage();