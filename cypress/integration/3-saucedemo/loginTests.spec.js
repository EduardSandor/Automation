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
    cy.get('[data-test=username]').invoke('attr', 'placeholder').should('contain', 'Username')
    cy.get('[data-test=password]').invoke('attr', 'placeholder').should('contain', 'Password')
  })
  it('Add valid input and login', () => {
    const loginUsername = 'standard_user'
    const loginPassword = 'secret_sauce'

    cy.get('[data-test=username]').type(`${loginUsername}{enter}`)
    cy.get('[data-test=password]').type(`${loginPassword}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.bm-burger-button').click()
    cy.get('a#logout_sidebar_link.bm-item.menu-item').click()
    cy.url().should('not.include', '/inventory.html')
  })
})