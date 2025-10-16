///<reference types ='cypress'/>

describe('Test Suite 1: E2e First', () => {
    it('TC 1: e2e visit each --find--', () => {
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

        //Selecting capcicum add to cart without each
        /*  cy.get('.products').find('.product').then((elements) => {
              cy.log(elements.find('.product-name').text()); //array of all products
              for (const eachelement of elements) {
                  cy.log(eachelement.find('.product-name').text());
                  if (eachelement.find('.product-name').text().includes('Capsicum')) {
                      cy.log(eachelement.find('.product-name').text());
                      eachelement.contains('button').click();
                  }
              }
          })
          // cy.log(element.find('.product-name').contains('Capsicum').text());*/
        //other than each method
        cy.get('.products').find('.product').then(($elements) => {
            // Convert jQuery object to array
            const products = Cypress.$.makeArray($elements); //converts the jQuery collection into a JavaScript array.

            products.forEach((product) => {
                //cy.log(product.find('.product-name').text());---it will not work as product is raw DOM element
                //Cypress.$(product) wraps the raw DOM element into jQuery, so.find() and.text() work properly.
                const productName = Cypress.$(product).find('.product-name').text();
                //converting product to Jquery object by Cypress.$(product)
                if (productName.includes('Capsicum')) {
                    cy.wrap(product).find('button').click();
                }
            });
        });

    }
    )
})