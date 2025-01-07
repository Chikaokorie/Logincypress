describe('Google', () => {
    it('passes', () => {
    cy.visit('https://www.google.com/')//Verify user is successfully navigated to the landing page
    cy.get('#APjFqb').click()//Verify User is able to click on tjhe input field
    .type('Magboro')
    })
  })