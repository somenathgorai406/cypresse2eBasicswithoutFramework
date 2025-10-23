/// <reference types="cypress" />

describe('MyTestSuite', ()=>{
   
  before(()=> {
    cy.log('********** Launch App ************')
    
  })

  after(()=> {
    // runs once after all tests in the block
    cy.log('********** Close App ************')
  })

  beforeEach(()=> {
    // runs before each test in the block
    cy.log('********** Login to App ************')

  })

  afterEach(()=> {
    // runs after each test in the block
    cy.log('********** Logout from App ************')

  })

     it('search', ()=> {
        cy.log('*********** Do search *************')
      })
    
     it.skip('advanced search', ()=> {
        cy.log('*********** Do advanced search *************')
     })


     it.only('listing Products', ()=> {
        cy.log('*********** List products *************')
     })

        
  })