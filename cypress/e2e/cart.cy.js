import login from "../PageObjects/LoginPage";
describe('shoptoaddcart',()=>{


   it.skip('Shoplist to cart',()=>{
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
         cy.get('#txtEmail').type("sanyal.pritam358@gmail.com")
         cy.get('#txtpassword').type('Sanyal88@')
         cy.get('#btn_signin').click()
         cy.wait(1000)
         cy.url().should('eq','https://esolztech.com/home/dashboard')
         cy.get(':nth-child(9) > .nav-link').click()
         cy.get('.item2 > .banneritem-img').click()
         cy.wait(4000)
         cy.get('#feature').scrollIntoView().should('be.visible').click()
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
         cy.get('#quentity').clear().type("-3")
         cy.wait(1000)
         cy.get('.fa-regular').click()
         cy.wait(1000)
         cy.get('#addtocartproduct').click()
         cy.get('.cart-toggle > img').click()
         cy.wait(1000)
         cy.get('#orderclosebtn_0 > img').click()
         cy.get('#user_initials').scrollIntoView().should('be.visible')
         cy.get('#user_initials').click()
         cy.wait(1000)
         cy.get('#by_Wishlist').click()
         cy.wait(1000)
         cy.get('.normal-price').scrollIntoView().should('be.visible')
         cy.wait(1000)
         cy.get('#removewishlist').click()
})

    it('Check addtocart without login',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
        
            return false
        })

         cy.visit("https://esolztech.com/")
         
         cy.wait(2000)
         cy.get('#cookies_btn').click()
         cy.get('#myHeader > div > div > div.main-menu-part > nav > ul > li:nth-child(2) > a').invoke('show')
         cy.get('#myHeader > div > div > div.main-menu-part > nav > ul > li:nth-child(2) > div > div > ul > li:nth-child(2) > div > div > a').click({force: true})
         cy.wait(2000)
         cy.get(':nth-child(1) > .filter-title').scrollIntoView().should('be.visible')
         cy.get(':nth-child(1) > .filter-title').click()
         cy.wait(2000)
         cy.get('#category_11').click()
         cy.get(':nth-child(1) > .filter-title').click()
         cy.get('#category_15').click()
         cy.wait(2000)
         cy.get(':nth-child(2) > .filter-title').click()
         cy.wait(2000)
         cy.get(':nth-child(3) > .filter-title').click()
         cy.wait(2000)
         cy.get('#skin_7').click()
         cy.wait(2000)
         cy.get('.pro-img > .product-details').scrollIntoView().should('be.visible')
         cy.get('.pro-img > .product-details').click()
         cy.get('li > p').scrollIntoView().should('be.visible')
         cy.wait(2000)
         cy.get('.aerow-down').select('30 ml').invoke('val').should('eq','30 ml')
         cy.get('#btn_sign_in').click()
         //cy.get('#txtEmail').type('sanyal.pritam358@gmail.com')
         //cy.get('#txtpassword').type('Sanyal88@')
         const ln=new login();
         ln.setEmailAddress("sanyal.pritam358@gmail.com")
         ln.setPassword("Sanyal88@")
         ln.clickSubmit()

         //cy.xpath("//input[@id='txtEmail']").type('sanyal.pritam358@gmail.com')
         //cy.xpath("//input[@id='txtpassword']").type('Sanyal88@')
        // cy.get('#btn_signin').click()
         cy.wait(4000)
         ln.verifyLogin()
         //cy.url().should('eq','https://esolztech.com/home/dashboard')
         

         





         






})

})