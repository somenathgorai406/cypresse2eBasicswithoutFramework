/// <reference types = 'cypress'/>
describe('Test Suite 3: Dropdown, Radio button, Checkbox and Assetions', () => {
    it('TC 1: Dropdown, Radio button, Checkbox and Assetions', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //alert will be auto accepted no need to worry
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //if you want to check the message
        cy.on('window:alert', (message) => {
            expect(message).equal('Hello , share this practice page and share your knowledge');

        })

        cy.on('window:confirm', (message) => {
            expect(message).equal('Hello , Are you sure you want to confirm?');

        })

        //tab
        //target="_blank" removing this attribute 
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        //wrap with cy.origin the tab url and then input your comment
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href*="about"]').click();
            cy.get('.section-title.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ');
            cy.get('.mt-50 h2').should('contain', 'Welcome to');
            cy.get('.mt-50 h2').should('include.text', 'QAClick');
            //cy.get('.mt-50 h2').should('include', 'QAClick'); working in url but here it is not working
        })
    })
})