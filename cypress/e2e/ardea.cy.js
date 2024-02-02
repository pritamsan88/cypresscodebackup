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
      cy.wait(2000)
      cy.xpath('/html/body/main/section/div/div[1]/div/predictive-search/main-search/form/div/input[1]').clear()
      cy.wait(2000)
      cy.xpath('/html/body/main/section/div/div[1]/div/predictive-search/main-search/form/div/input[1]').type("dinner for 6")
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

})