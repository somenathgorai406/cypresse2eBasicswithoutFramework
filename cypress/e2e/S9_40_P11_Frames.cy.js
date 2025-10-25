import 'cypress-iframe'

describe('handling iframes', (() => {

    it('appraoch 1: creating iframe variable with cy.wrap', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe');

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        //iframe.clear().type("Welcome");

        iframe.clear().type("Welcome {ctrl+a}"); //select all text {ctrl+a}
        cy.get("[aria-label='Bold']").click();


    })

    it('appraoch2 - using custom command', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe');

        //cy.getIframe('#mce_0_ifr').clear().type('Welcome');

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();

    })

    it('appraoch3 - using cypress iframe plugin', () => {

        cy.visit('http://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');

        //cy.iframe('#mce_0_ifr').clear().type("Welcome");

        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();

    })


}));