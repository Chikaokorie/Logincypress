describe('TimbaLoginTestcases', () => {
    it('Valid Credentials(Verify User successfully logs in with valid Credentials)', () => {
      cy.visit('https://qa.apps.timbaapps.com/login')//Verify user successfully navigates to the Login page
      cy.get('#field-\\:R6taeddf6\\:').click()//Clicking on the Email Field
      .type('Mamasamuelpaul@mailinator.com')//Typing on the Email Field
      cy.get('#field-\\:Rataeddf6\\:').click()//Clicking on the Password field
      .type('Peace92#')
      cy.get('.chakra-input__right-element').click()//Clicking on the Eye Icon
      cy.get('.chakra-button').click()//Clicking on the Login Button
    })
    it('Invalid Credentials(Verify User  cannot successfully logs in with invalid Credentials)', () => {
        cy.visit('https://qa.apps.timbaapps.com/login')//Verify user successfully navigates to the Login page
        cy.get('#field-\\:R6taeddf6\\:').click()//Clicking on the Email Field
        .type('Magboro@mailinator.com')//Typing on the Email Field
        cy.get('#field-\\:Rataeddf6\\:').click()//Clicking on the Password field
        .type('P92#')
        cy.get('.chakra-input__right-element').click()//Clicking on the Eye Icon
        cy.get('.chakra-button').click()//Clicking on the Login Button
      })
      it('Valid Email and Invalid Password Credentials(Verify User  cannot successfully logs in with A valid email and Invalid Password Credentials)', () => {
        cy.visit('https://qa.apps.timbaapps.com/login')//Verify user successfully navigates to the Login page
        cy.get('#field-\\:R6taeddf6\\:').click()//Clicking on the Email Field
        .type('Mamasamuelpaul@mailinator.com')//Typing on the Email Field
        cy.get('#field-\\:Rataeddf6\\:').click()//Clicking on the Password field
        .type('123')
        cy.get('.chakra-input__right-element').click()//Clicking on the Eye Icon
        cy.get('.chakra-button').click()//Clicking on the Login Button
      })
      it('Invalid  Email and Valid Password Credentials(Verify User  cannot successfully logs in with A valid email and Invalid Password Credentials)', () => {
        cy.visit('https://qa.apps.timbaapps.com/login')//Verify user successfully navigates to the Login page
        cy.get('#field-\\:R6taeddf6\\:').click()//Clicking on the Email Field
        .type('ife@mailinator.com')//Typing on the Email Field
        cy.get('#field-\\:Rataeddf6\\:').click()//Clicking on the Password field
        .type('Peace92#')
        cy.get('.chakra-input__right-element').click()//Clicking on the Eye Icon
        cy.get('.chakra-button').click()//Clicking on the Login Button
      })
  })