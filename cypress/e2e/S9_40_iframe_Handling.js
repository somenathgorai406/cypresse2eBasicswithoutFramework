//frame is a webpage within a webpage
//first need to install cypress-iframe plugin
//npm install -D cypress-iframe
//then need to add this line in cypress/support/e2e.js

/// <reference types="cypress" />
//reference types="cypress-iframe" for intellisense
/// <reference types="cypress-iframe" />

//import 'cypress-iframe'
import 'cypress-iframe'

describe('Iframe Test', () => {

    it('Test 6th', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')//check if iframe is loaded
        //cy.iframe() to get inside the iframe
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})
