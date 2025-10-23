describe('mysuite', ()=> 
{
  it('NavigationTest', ()=> 
    {
    cy.visit('https://demo.opencart.com/index.php')
    cy.title().should('eq','Your Store') //home

    cy.get('li:nth-child(7) a:nth-child(1)').click(); //cameras
    cy.get("div[id='content'] h2").should('have.text','Cameras'); 

    cy.go('back'); //Back to home page
    cy.title().should('eq','Your Store') //home 
       
    cy.go('forward')
    cy.get("div[id='content'] h2").should('have.text','Cameras'); //cameras

    cy.go(-1) //back
    cy.title().should('eq','Your Store') //home

    
    cy.go(1) //forward
    cy.get("div[id='content'] h2").should('have.text','Cameras'); //cameras

    cy.reload()
      
    })
        
  })