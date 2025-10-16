/*
/// <reference types = 'cypress'/>

describe('Test Suite 3: Dropdown, Radio button, Checkbox and Assetions', () => {
    it('TC 1: Dropdown, Radio button, Checkbox and Assetions', () => {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');


        //window handling
        //target="_blank" removing this attribute 
        cy.wait(2000);
        // '#openwindow' triggers window.open; removeAttr won't work. Stub window.open to open in same tab.
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
            });
        });

        cy.get('#openwindow').click();
        cy.wait(10000)

        // use origin without trailing slash and tolerant text checks
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get('#navbarSupportedContent a[href*="about"]').click();
            cy.get('.section-title.mt-50 h2').invoke('text').then(t => {
                const text = t.trim();
                expect(text).to.include('Welcome to');
                expect(text).to.include('QAClick');
            });
        })
    })
})
*/