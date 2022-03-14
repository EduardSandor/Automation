describe('Visit the Sauce Demo website', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  it('should Login with valid user', function () {
    const loginUsername = 'standard_user'
    const loginPassword = 'secret_sauce'
    cy.get('[data-test=username]').type(`${loginUsername}{enter}`)
    cy.get('[data-test=password]').type(`${loginPassword}{enter}`)
    cy.get('[data-test="login-button"]').click()
    cy.url().should("include", '/inventory.html')
    cy.get('inventory_item').should('have.length', 6)
    cy.get('#item_4_img_link').click()
    cy.url().should('include', '/inventory-item.html?id=4')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  });
})