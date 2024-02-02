class login{

    textemailaddress="//input[@id='txtEmail']"
    textpassword="//input[@id='txtpassword']"
    button="#btn_signin"
    url="https://esolztech.com/home/dashboard"
setEmailAddress(email)
{
    cy.xpath(this.textemailaddress).type(email)

}

setPassword(password)
{
    cy.xpath(this.textpassword).type(password)

}
clickSubmit()
{
    cy.get(this.button).click()
}

verifyLogin()
{
    cy.url().should('eq',this.url)
}

}
export default login;
