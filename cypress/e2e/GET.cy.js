///<reference types="Cypress"/>

describe ('Get request', ()=>{

it ('Get users',()=>{

cy.request ({

             method : 'GET',
             url:'https://gorest.co.in/public/v2/users',
             headers : {
              'Authorization' : "Bearer 408cb3228c1ab01409e6910af66f9aac1c4b13afac6e2524428c5017fe2d05d2"
             }


}).then((res)=>{

    expect(res.status).to.eq(200)
    
    

})

})

})