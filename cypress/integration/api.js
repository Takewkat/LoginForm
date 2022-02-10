//For Code 200 VALID DATA IS REQUIRED
describe('API Code answers check', function () {
  // we can use these values to log in
  const email = 'Valid email'
  const password = 'Valid password'

  context('cy.request', () => {

    it('without authorization gets 401', () => {
      cy.request({
        url: '/login',
        failOnStatusCode: false,
      }).its('status').should('equal', 401)
    })

    it('with authorization', () => {
      cy.request({
        url: '/login',
        auth: {
          email, password,
        },
      }).its('status').should('equal', 200)
      // to prove we have a session
      cy.getCookie('cypress-session-cookie').should('exist')
    })
  })
})