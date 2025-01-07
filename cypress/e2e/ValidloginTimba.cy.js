describe('LoginflOW', () => {
    it('Valid Credentials', () => {
      cy.visit('https://qa.apps.timbaapps.com/login')
      cy.get('#field-\\:R1naeddf6\\:').click()//EMail Field
      .type('Mamasamuelpaul@mailinator.com');
      cy.get('#field-\\:R2naeddf6\\:').click()//Password Field
      .type('Peace92#');
      cy.get('.chakra-input__right-element').click()//Eye Icon
      cy.get('.chakra-button').click()//Login Button
    })
  })
  describe('loginflow', () => {
    it('invalidcredentials', () => {
      cy.visit(' https://qa.apps.timbaapps.com/login')//verify user is navigated to the login page
      cy.get('#field-\\:R1naeddf6\\:').click()//email field
      .type('abcde@gmail.com')//email
      cy.get('#field-\\:R2naeddf6\\:').click()//password field
      .type('adam2')//password
      cy.get('.chakra-button').click()//login button
      
    })
  })

  describe('loginflow', () => {
    it('InValid  Email and valid Password Credentials', () => {
      cy.visit(' https://qa.apps.timbaapps.com/login')//verify user is navigated to the login page
      cy.get('#field-\\:R1naeddf6\\:').click()//email field
      .type('Agnes12@gmail.com')//email
      cy.get('#field-\\:R2naeddf6\\:').click()//password field
      .type('Peace92#')//password
      cy.get('.chakra-button').click()//login button
      
    })
  })

  describe('loginflow', () => {
    it('Valid Email and Invalid Credentials', () => {
      cy.visit(' https://qa.apps.timbaapps.com/login')//verify user is navigated to the login page
      cy.get('#field-\\:R1naeddf6\\:').click()//email field
      .type('Mamasamuelpaul@mailinator.com')//email
      cy.get('#field-\\:R2naeddf6\\:').click()//password field
      .type('baba818')//password
      cy.get('.chakra-button').click()//login button
      
    })
  })

  describe('loginflow', () => {
    it('Nocredentials', () => {
      cy.visit(' https://qa.apps.timbaapps.com/login')//verify user is navigated to the login page
      cy.get('#field-\\:R1naeddf6\\:').click()//email field
      //.type('')//email
      cy.get('#field-\\:R2naeddf6\\:').click()//password field
      //.type('')//password
      cy.get('.chakra-button').click()//login button
      
    })
  })