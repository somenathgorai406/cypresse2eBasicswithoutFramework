describe('XPathLocators', () => {
    
   it('find no.of products', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.viewport('macbook-16')
        cy.xpath("//ul[@id='homefeatured']/li").should('have.length', 7)
     })

     it('chained xpath', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.viewport('macbook-16')
        cy.xpath("//ul[@id='homefeatured']").xpath("./li").should('have.length', 7)  
     })



})