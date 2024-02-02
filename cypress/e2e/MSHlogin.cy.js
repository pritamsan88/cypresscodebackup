describe('MSHloginTest',()=>{
    it('esolztech project valid login Test',()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    
         cy.visit("https://esolztech.com/")
         
         cy.wait(2000)
         cy.get('#cookies_btn').click()
        
         cy.get('.user-toggle').invoke('show')
         cy.contains(' Sign In').click({force: true}) 
         cy.get('#txtEmail').type("sanyal.pritam538@gmail.com")
         cy.get('#txtpassword').type('Sanyal88@')
         cy.get('#btn_signin').click()   
         cy.url().should('eq','https://esolztech.com/home/dashboard')
         cy.wait(2000)
    })

    it('esolztech project Invalid login Testcase 1',()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    
         cy.visit("https://esolztech.com/")
         
         cy.wait(2000)
         cy.get('#cookies_btn').click()
        
         cy.get('.user-toggle').invoke('show')
         cy.contains(' Sign In').click({force: true}) 
         cy.get('#txtEmail').type("sanyal.pritam@gmail.com")
         cy.get('#txtpassword').type('sanyal88@')
         cy.get('#btn_signin').click()
         cy.wait(1000)
         cy.get('.swal2-confirm').click()
         cy.url().should('eq','https://esolztech.com/home/dashboard')
    })
    it('esolztech project Invalid login Testcase 2',()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    
         cy.visit("https://esolztech.com/")
         
         cy.wait(2000)
         cy.get('#cookies_btn').click()
        
         cy.get('.user-toggle').invoke('show')
         cy.contains(' Sign In').click({force: true}) 
         cy.get('#txtEmail').type("       ")
         cy.get('#txtpassword').type('sanyal88@')
         cy.get('#btn_signin').click()
         cy.wait(1000)
         //cy.get('.swal2-confirm').click()
         cy.url().should('eq','https://esolztech.com/home/dashboard')
    })
    it('esolztech project Invalid login Testcase 3',()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    
         cy.visit("https://esolztech.com/")
         
         cy.wait(2000)
         cy.get('#cookies_btn').click()
        
         cy.get('.user-toggle').invoke('show')
         cy.contains(' Sign In').click({force: true}) 
         cy.get('#txtEmail').type("@xyz.com")
         cy.get('#txtpassword').type('sanyal88@')
         cy.get('#btn_signin').click()
         cy.wait(1000)
         //cy.get('.swal2-confirm').click()
         cy.url().should('eq','https://esolztech.com/home/dashboard')
    })







})