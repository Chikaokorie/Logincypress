describe('Google', () => {
    it('Testing Google site', () => {
      cy.visit('https://www.google.com/')//Verify User is able to launch Site
      cy.get('#APjFqb').click()//User is able to click on the input Field
      .type('Berger')//User is able to type on the Input Field

    })
  })
