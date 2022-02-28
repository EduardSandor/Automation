describe('My First Test', () => {
  it('Visits the Sauce Demo website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.contains('Login')
  })
})