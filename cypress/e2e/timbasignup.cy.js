describe('timbaSignUp', () => {
    it('SignUpNewUser', () => {
      cy.visit('https://qa.timbaapps.com/')
      cy.get('.css-ftmtxj').click()//Clicking On Sign Up
      cy.get(':nth-child(3) > .chakra-button').click()//Clicking on Get Staretd On Premium Column
      

    
    })
  })