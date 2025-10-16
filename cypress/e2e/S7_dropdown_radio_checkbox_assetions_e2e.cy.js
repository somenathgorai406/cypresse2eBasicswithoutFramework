/// <reference types = 'cypress'/>
describe('Test Suite 3: Dropdown, Radio button, Checkbox and Assetions', () => {
    it('TC 1: Dropdown, Radio button, Checkbox and Assetions', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1');
        cy.get('input[type="checkbox"]').check(['option1', 'option2']);
        //common css locator for all
        //only value is allowed in option

        //static dropdown
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1');
        //select('value/visible options')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
            .should('have.value', 'ind');

        cy.get('.ui-menu-item div').each((el) => {
            if (el.text() === 'India') {
                cy.wrap(el).click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India');

        //radio
        cy.get('[value="radio2"]').check().should('be.checked'); //exactly that button
        cy.get('.radioButton').first().check().should('be.checked'); //all the common button css
        cy.get('.radioButton').last().check().should('be.checked');

        //visible and invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

    })
})