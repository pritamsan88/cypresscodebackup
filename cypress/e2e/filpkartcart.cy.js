
describe('flipkart automation',()=>{

    it('Search product & click the product',()=>{

        cy.visit("https://www.flipkart.com/")
        cy.get('._30XB9F').click()
        cy.get('._2SmNnR').type("iphone 13 128")
        cy.wait(500)
        cy.get('button[type="submit"]').click()
        
       
        
      })
     
      it('product details page',()=>{

        cy.visit('https://www.flipkart.com/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c?pid=MOBG6VF5SMXPNQHG&lid=LSTMOBG6VF5SMXPNQHGTJUCOX&marketplace=FLIPKART&q=iphone+13+128&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=a29d3238-f696-4c7b-a52c-f045129eb639.MOBG6VF5SMXPNQHG.SEARCH&ppt=browse&ppn=browse&ssid=moaqb3404w0000001701172652474&qH=f69496424e64cd29')
        cy.get('a').contains('512 GB', { matchCase: false }).click()
        cy.wait(500)
        cy.get('button[class="_2KpZ6l _2U9uOA _3v1-ww"]').click()
        cy.wait(1000)


      })





})
