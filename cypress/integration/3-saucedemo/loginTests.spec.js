describe('My First Test', () => {
  it('Visits the Sauce Demo website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.contains('Login').click()
    cy.get('.error').should('have.text', 'Epic sadface: Username is required')
    cy.get('.error-button').click()
  })
})