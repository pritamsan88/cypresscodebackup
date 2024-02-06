


describe('Dragand dropfunctionality',()=>{

    it.skip('To check the drag&drop functionlaity',()=>{
      
     cy.visit('https://vishalok12.github.io/jquery-dragarrange/')

     cy.wait(2000)
     
     
     cy.get('.d-1').drag('.d-3',{force:true})


     
     
    
      })

       it('To check the Auto suggestion',()=>{

        cy.visit('https://www.google.com/')
       cy.get('#APjFqb').type("selenium")
       cy.get("div[role='option']").each(function($ele,index,$list){
        if($ele.text().includes("selenium webdriver")) {
        
         cy.wrap($ele).click()


        }else{

          cy.log($ele.text())


        }




    })
  
  })
        
   
  })


     

     
     
     
     


     
     
    

