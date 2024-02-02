
describe('Filpkart',()=>{

    it('product search',()=>{
       cy.visit("https://www.flipkart.com/")
       cy.get('._30XB9F').click()
       cy.get('._2SmNnR').type("iphone")
       cy.get('button[type="submit"]').click()
       

    })
    it('Special Character search ',()=>{
       cy.visit("https://www.flipkart.com/")
       cy.get('._30XB9F').click()
       cy.get('._2SmNnR').type("%$%$#@")
       cy.get('button[type="submit"]').click()

    })
     it('Particulars product iphone 13',()=>{
       cy.visit("https://www.flipkart.com/")
       cy.get('._30XB9F').click()
       cy.get('._2SmNnR').type("iphone 13")
       cy.get('button[type="submit"]').click()

    })

     it('128gb products iphone 13 128',()=>{
       cy.visit("https://www.flipkart.com/")
       cy.get('._30XB9F').click()
       cy.get('._2SmNnR').type("iphone 13 128")
       cy.get('button[type="submit"]').click()

    })

     it('Blank Search',()=>{
     cy.visit("https://www.flipkart.com/")
     cy.get('._30XB9F').click()
     cy.get('._2SmNnR').type(" ")
    cy.get('button[type="submit"]').click()

    })

})