
describe('Alerts', () => {
    //working
    //1) Javascript Alert: It will have some text and an ‘OK’ button
    it('JS Alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click(); // click for JS Alert

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })

        // cy.on('window:confirm', () =>true);  //accept by clicking Ok button 
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    //working
    //2) Javascript Confirm: It will have some text with ‘OK’ and ‘Cancel’ buttons

    it('JS Confirm Alert with OK', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click(); // click for JS Confirm Alert

        cy.on("window:confirm", (t) => {
            expect(t).to.equal("I am a JS Confirm");   //verify text on alert 
        });

        //cy.on('window:confirm', () => true) //accept by Ok button - default
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    //working
    it('JS Confirm Alert with Cancel', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click(); // click for JS Confirm Alert

        cy.on("window:confirm", (t) => {
            expect(t).to.equal("I am a JS Confirm");   //verify text on pop-up 
        });

        cy.on('window:confirm', () => false);  //accept by Cancel button 
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    //working
    //3) Javascript Prompt: It will have some text with a text box for user input along with ‘OK’ and ‘Cancel’ buttons.
    it('JS Confirm Alert with Prompt', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
            cy.get("button[onclick='jsPrompt()']").click();
        })

        cy.get('#result').should('have.text', 'You entered: welcome')

    })



    //working
    //4) Authenticated Alert
    it('Authenticated alert', () => {

        //Approach 1
        /*cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: 
                                                                        {   username: "admin", 
                                                                            password: "admin"
                                                                        }
                                                                    }
                );
       */
        //Approach2                                                            
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('have.contain', "Congratulations")

    })

})