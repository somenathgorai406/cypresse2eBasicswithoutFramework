describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handling hidden elements like mouse hover
        //.shaow() to make it visible possible here also
        cy.get('div.mouse-hover-content').invoke('show') //this show be immediate parent
        cy.contains('Top').click()
        //cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
    it('My FirstTest case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //{force: true} to click hidden elements
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //.shadow() to make visible shadowroot cases
        //here it will not work because it is not shadow dom
        //cy.get('div.mouse-hover-content').shadow().contains('Top').click()
    })


})

