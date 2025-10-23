describe('Locators', () => {
    
    it('verify title-positve', ()=>  {
      
    cy.visit("http://automationpractice.com/index.php")
    cy.viewport('macbook-16')

    //css with tag & id
    //cy.get("input#search_query_top").type("T-Shirts")  // id,   tagname is optional
    
    //css with tag & class
    //cy.get("input.search_query").type("T-Shirts")  // class,  tagname is optional

    //css with tag & attribute
    //cy.get("input[name='search_query']").type("T-Shirts")  // attribute,  tagname is optional

    //tag class attribute
    cy.get("input.search_query[name='search_query']").type("T-Shirts")  // attribute,class  tagname is optional

    cy.get("button[name='submit_search']").click()  // click on search
    cy.get(".lighter").contains('T-Shirts')  //Assertion

    })
})