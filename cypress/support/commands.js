import {userBuilder} from './generate'
/* createUser with VALID DATA
Cypress.Commands.add('createUser', overrides => {
  const user = validUser(overrides);
  return cy
    .request({
      url: 'https://app2.abtasty.com/login',
      method: 'POST',
      body: user,
    })
    .then(({body}) => body.user)
})*/

Cypress.Commands.add('fillInputs', function(overrides) {
  const user = userBuilder(overrides)  
  cy.get('[data-testid="email"]').type(user.email)
  cy.get('[data-testid="password"]').type(user.password)
})

/* // TESTKEY FOR CAPTCHA REQUIRED
Cypress.Commands.add('confirmCaptcha', function() {
  widgetId = grecaptcha.reset(document.getElementById('example'), {
    'sitekey' : 'your sitekey',
  });
})*/

