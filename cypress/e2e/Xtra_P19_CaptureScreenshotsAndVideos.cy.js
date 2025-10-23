describe('mysuite', ()=> 
{
  it('Capture screenshots', ()=> 
    {
    cy.visit('https://demo.opencart.com/')
    cy.screenshot("full page");   //filename is: fullpage
    cy.get("img[title='Your Store']").screenshot("Logo"); //file name is: Logo
    
   //Automatically capture Screenshot & Video on failure - should run through CLI
   //npx cypress run --record --spec "spec file name"
   
    cy.get('li:nth-child(7) a:nth-child(1)').click(); //cameras
    cy.get("div[id='content'] h2").should('have.text','Tablets'); 

    })

    after(function () {
        if (this.currentTest.state === "failed") {
            cy.wait(5000)
        }
    })

  })