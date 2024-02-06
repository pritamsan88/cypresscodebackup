import login from "../PageObjects/LoginPage";
import cart from "../PageObjects/cart";
describe('carttopayment',()=>{
     


     it('mshcart to payment flow',()=>{
      
        Cypress.on('uncaught:exception',(err,runnable)=>{

        return false

        })
        //cy.visit("https://esolztech.com/")
        //cy.wait(2000)
       // cy.get('#cookies_btn').click()
        cy.fixture('MSHlogin').then((data)=>{
            cy.visit("https://esolztech.com/")
            cy.wait(2000)
        cy.get('#cookies_btn').click()
            data.forEach((userdata)=> {
                //cy.visit("https://esolztech.com/")
                //cy.wait(2000)
               
                 cy.get('.user-toggle').invoke('show')
                 cy.contains(' Sign In').click({force: true})
                  const ln=new login()
                  ln.setEmailAddress(userdata.email)
                  ln.setPassword(userdata.password)
                  ln.clickSubmit()
                  cy.wait(1000)
                  ln.verifyLogin()
            cy.get(':nth-child(9) > .nav-link').click()
         const a=new cart()
         a.clickoption1()
         cy.wait(4000)
         a.scrollintoviewelement()
         cy.wait(1000)
         cy.get('#best_seller').click()
         cy.wait(1000)
         cy.get(':nth-child(1) > .filter-title').click()
         cy.get('#category_11').click()
         cy.wait(1000)
         cy.get(':nth-child(1) > .filter-title').click()
         cy.get('#category_9').click()
         cy.get(':nth-child(1) > .prolist-inner > .pro-img > .product-details').click()
         cy.wait(1000)
         cy.get('#quentity').scrollIntoView().should('be.visible')
         cy.get('#quentity').clear().type("2")
         cy.wait(1000)
         cy.get('#addtocartproduct').click()
         cy.get('.cart-toggle > img').click()
         cy.wait(1000)
         cy.get('#user_initials').click()
         cy.wait(1000) 
         cy.get('#btn_logout').click()
            
         })   
         


         })
     
    
    
    
    
    
    })

})