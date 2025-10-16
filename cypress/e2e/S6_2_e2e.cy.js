///<reference types ='cypress'/>

describe('Test Suite 2: E2e First', () => {
    it('TC 2: e2e concepts --find--', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(1000)
        //recoginzing visible elements
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);
        //without visible
        cy.get('.products').find('.product').should('have.length', 4)

        //Selecting capcicum add to cart //find eq contains
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        //with out eq hardcoding
        //each method --cy.wrap for click method
        cy.get('.products').find('.product').each(($el, index, $list) => {
            if ($el.find('.product-name').text().includes('Capsicum')) {
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())  // Here logoelement is a jQuery object
        })
        //saving element as Aliasing----it acts likke variable as cypress does not get // Use it later multiple times
        //const productLocator = cy.get('.products')--it will not work as cypress does not get it immediately and it is async
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click({ force: true })

        //console.log is non cypress command and it is async
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        console.log("sf")
        //handling the sequence with then()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () { console.log('sf') })

        cy.get('.brand').should('have.text', 'GREENKART')
    }
    )
})