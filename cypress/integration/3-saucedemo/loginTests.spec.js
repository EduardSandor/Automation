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
  it('Add input and login', () => {
    // usernames: valid - standard_user; invalid: locked_out_user, problem_user, performance_glitch_user
    const loginUsername = 'locked_out_user'
    const loginPassword = 'secret_sauce'

    cy.get('[data-test=username]').type(`${loginUsername}{enter}`)
    cy.get('[data-test=password]').type(`${loginPassword}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    cy.get('.error-button').click()
    cy.get('[data-test=username]').should('have.value', 'locked_out_user')
    cy.get('[data-test=password]').should('have.value', 'secret_sauce')
    cy.get('[data-test="error"]').should('not.exist')
   /*
   cy.url().should('include', '/inventory.html')
   cy.get('.bm-burger-button').click()
   cy.get('#logout_sidebar_link').click()
   cy.url().should('not.include', '/inventory.html')
    */
  })
})