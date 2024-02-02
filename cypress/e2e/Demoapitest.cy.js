///<reference types="Cypress"/>

describe('Http request',()=> {

         it('Check Get API response',()=>{

          cy.request('Get','https://jsonplaceholder.typicode.com/posts/1')
          .its('status').should('equal',200)
        })
})

describe('Https request',()=>{

         it('Check Post  ApI response',()=>{

          cy.request({

                     method: 'Post',
                      url :'https://jsonplaceholder.typicode.com/posts',
                      body :{
                        
                            title: 'This is for testing',
                            body: 'This is for post call',
                            userId: 1
                          }
                            




                     }).its('status').should('equal',201)
          }) 
          
          
          it('Check put call',()=>{

            cy.request({

                method: 'Put',
                 url :'https://jsonplaceholder.typicode.com/posts/1',
                 body :{
                    
                        id: 1,
                        title: 'This is updated ',
                        body: 'this is updated ',
                        userId: 1
                      
                     }
                       




                }).its('status').should('equal',200)
     }) 

            it('This is for delete API',()=>{

            cy.request({


                method: 'Delete',
                url :'https://jsonplaceholder.typicode.com/posts/1',





            }).its('status').should('equal',200)
            })








          })
