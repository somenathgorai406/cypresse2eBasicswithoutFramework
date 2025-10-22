/// <reference types = 'cypress'/>
describe('Test Suite 3: Dropdown, Radio button, Checkbox and Assetions', () => {
    it('TC 1: Dropdown, Radio button, Checkbox and Assetions', () => {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //cy.get('#openwindow').click();
        cy.get('#opentab').then((el) => {
            const url = el.prop('href'); //href attribute value is stored in url
            cy.visit(url);

            // use origin
            cy.origin(url, () => {
                cy.get('#navbarSupportedContent a[href*="about"]').click();
                cy.get('.section-title.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ');
                cy.get('.mt-50 h2').should('contain', 'Welcome to');
                cy.get('.mt-50 h2').should('include.text', 'QAClick');
            });
        })
    })
})