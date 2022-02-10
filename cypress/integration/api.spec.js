import {validUser} from '../support/data'

//For Code 200 VALID DATA IS REQUIRED
describe('API Code answers check', function () {
  // we can use these values to log in

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
          validUser
        },
      }).its('status').should('equal', 200)
      // to prove we have a session
      cy.getCookie('cypress-session-cookie').should('exist')
    })
  })
})