describe('My First Test', () => {
  it('Visit the Sauce Demo website', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.contains('login-button')
  })
})