describe('template spec', () => {
    it('launch site', () => {
      cy.visit('https://x.com/')
      cy.get('#gsi_267739_902577').click()
    })
  })