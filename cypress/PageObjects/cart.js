class cart{

    option1='.item2 > .banneritem-img'
    option2='#feature'

  clickoption1()
  {
    cy.get(this.option1).click()
  }

  scrollintoviewelement()
  {
    cy.get(this.option2).scrollIntoView().should('be.visible').click()
  }






}
export default cart