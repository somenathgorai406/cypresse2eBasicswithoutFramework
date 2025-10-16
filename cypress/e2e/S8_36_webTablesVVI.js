/// <reference types="cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {
        //handling web tables
        cy.visit("https://rahul.shettyacademy.com/AutomationPractice/")

        //it is possible to select entire row direct so we need to write code
        // tr td:nth-child(2)..here tr is parent tag, then td is child tag, 
        // then to number we use: nthchild(number) --VVI

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            //we need to use each in order to find the match in the table
            const text = $el.text()

            if (text.includes("Python")) {
                //cypress confuses with jquerry code like text.
                //in order to resolve it then() method is used
                //.next() is used to get next sibling --VVI but have to use with get or find
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})