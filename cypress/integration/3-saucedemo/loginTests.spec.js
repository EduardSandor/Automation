describe('Visits the Sauce Demo website', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  it('Clicks on Login button and checks the error message displayed', () => {
    cy.contains('Login').click()
    cy.get('.error').should('have.text', 'Epic sadface: Username is required')
    cy.get('.error-button').click()
  })
  it('Checks the placeholder text from the username and password fields', () => {
    cy.get('input#user-name.input_error.form_input').invoke('attr', 'placeholder').should('contain', 'Username')
    cy.get('input#password.input_error.form_input').invoke('attr', 'placeholder').should('contain', 'Password')
  })
  it('Add valid input and login', () => {
    const loginUsername = 'standard_user'
    const loginPassword = 'secret_sauce'

    cy.get('[data-test=username]').type(`${loginUsername}{enter}`)
    cy.get('[data-test=password]').type(`${loginPassword}{enter}`)
    cy.get('[data-test=login-button]').click()
  })
})