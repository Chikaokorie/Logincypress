describe('LoginflOW', () => {
    it('Valid Credentials', () => {
      cy.visit('https://qa.apps.timbaapps.com/login')
      //cy.get('#field-\\:R1naeddf6\\:').click()//EMail Field
      cy.get('#field-\\:R6taeddf6\\:').click()//EMail Field
      .type('Mamasamuelpaul@mailinator.com');
      //cy.get('#field-\\:R2naeddf6\\:').click()//Password Field
      cy.get('#field-\\:Rataeddf6\\:').click()
      .type('Peace92#');
      cy.get('.chakra-input__right-element').click()//Eye Icon
      cy.get('.chakra-button').click()//Login Button
    })
  })
  