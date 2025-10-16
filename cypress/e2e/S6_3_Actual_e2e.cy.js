///<reference types ='cypress'/>

describe('Test Suite 1: E2e First', () => {
    it('TC 1: e2e visit each --find--', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(1000)

        cy.get('.products').find('.product').each(($el, index, $list) => {
            if ($el.find('.product-name').text().includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.cart-icon').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    }
    )
})