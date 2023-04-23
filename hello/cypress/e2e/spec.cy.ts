describe('Hello Application test', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('section.phx-hero h1').should('contain.text', 'Welcome to Phoenix!')
    cy.get('section.phx-hero p').should('contain.text', 'Peace of mind from prototype to production')
    cy.get('a:contains(Get Started)').click()
  })
})