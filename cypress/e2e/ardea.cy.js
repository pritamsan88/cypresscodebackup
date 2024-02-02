describe('search functionality test for ardea',()=>{

    it('Auto search functionality ',()=>{
      Cypress.on('uncaught:exception',(err,runnable)=>{

        return false
      })

      cy.visit("https://www.aardea.com/")

      cy.wait(2000)
      cy.get('body').invoke('show')
      cy.get('body').click({force: true})
      cy.wait(2000)
      cy.xpath('/html/body/div[1]/sticky-header/div/nav/div/div[2]/ul/li[1]/form/input').type('Amalfi - Dinner Set For 6',{force: true})
      cy.wait(2000)
      cy.xpath('/html/body/div[1]/sticky-header/div/nav/div/div[2]/ul/li[1]/form/a[1]/input').click({force: true})

    })

})