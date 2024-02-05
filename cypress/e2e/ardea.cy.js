describe('search functionality test for ardea',()=>{

    it('Auto search functionality with valid details ',()=>{
      Cypress.on('uncaught:exception',(err,runnable)=>{

        return false
      })

      cy.visit("https://www.aardea.com/")

      cy.wait(2000)
      cy.get('body').invoke('show')
      cy.get('body').click({force: true})
      cy.wait(2000)
      cy.xpath("//input[@type='text']").type('Amalfi - Dinner Set For 6',{force: true})
      cy.wait(2000)
      cy.xpath("//input[@id='search']").click({force: true})
      cy.wait(2000)
      cy.xpath("//input[@id='Search-In-Template']").clear()
      cy.wait(2000)
      cy.xpath("//input[@id='Search-In-Template']").type("dinner for 6")
      cy.get("li[role='option']").each(function($ele,index,$list){
       if($ele.text().includes("Verde Butterfly - 14 Pieces Dinner Set for 6")){

      cy.wrap($ele).click()
       }
       else
       {
         cy.log($ele.text())

       }


      })
    
    })

       it('Auto suggestion functionality with invlid details',()=>{
        Cypress.on('uncaught:exception',(err,runnable)=>{

          return false
        })
        cy.visit("https://www.aardea.com/")
        cy.get('body').invoke('show')
        cy.get('body').click({force: true})
        cy.wait(2000)
        cy.xpath("//input[@type='text']").type('@#$%^&&&&^',{force: true})
        cy.wait(2000)
      cy.xpath("//input[@id='search']").click({force: true})





    })

})