describe('approch1 handletab',()=>{
    
it.skip('approch1 handle tab',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

     cy.visit("https://hph.mmi.media/motivation/")
     cy.wait(3000)
     cy.get('#navo_menu > li:nth-child(5) > a').invoke('removeAttr','target').click()
     cy.wait(3000)
     
})
it.skip('Search product & click the product',()=>{

    cy.visit("https://www.flipkart.com/")
    cy.get('._30XB9F').click()
    cy.get('._2SmNnR').type("iphone 13 128")
    cy.wait(500)
    cy.get('button[type="submit"]').click()
    cy.wait(500)
    cy.get('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(3) > div > div > div > a').invoke('removeAttr','target').click()
    cy.get('#swatch-2-storage > a').click()
    cy.wait(1000)
    cy.get('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-5-12._78xt5Y > div:nth-child(2) > div > ul > li:nth-child(1) > button').click()
    cy.wait(1000)
    cy.visit('https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART')
})
it.skip('Search product & click the product',()=>{

    cy.visit("https://www.flipkart.com/")
    cy.get('._30XB9F').click()
    cy.get('._2SmNnR').type("iphone 13 128")
    cy.wait(500)
    cy.get('button[type="submit"]').click()
    cy.wait(500)
    cy.get('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(3) > div > div > div > a').then((e)=>{

        const url=e.prop('href')
        cy.visit(url);
    })
    //cy.url().should('include','https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f?pid=MOBG6VF5ADKHKXFX&lid=LSTMOBG6VF5ADKHKXFX4LCPEV&marketplace=FLIPKART&q=iphone+13+128&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=ae52fc59-8195-4778-9708-98f2d2baa818.MOBG6VF5ADKHKXFX.SEARCH&ppt=hp&ppn=homepage&ssid=3m6dtk4cs00000001701674690590&qH=f69496424e64cd29')
    cy.get('#swatch-2-storage > a').click()
    cy.wait(1000)
    cy.get('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-5-12._78xt5Y > div:nth-child(2) > div > ul > li:nth-child(1) > button').click()
    cy.wait(1000)
    cy.visit('https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART')
})
it('esolztech project',()=>{

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
     
})

})