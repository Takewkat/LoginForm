//TESTS WITH VALID DATA
//VALID DATA SET REQUIRED
/*describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.findByLabelText(('[data-testid="email"]').type(user.email)
      cy.findByLabelText('[data-testid="password"]').type(user.password)
      cy.findByText(/submit/i).click()
    })
  })
})*////////////   + all cases with Valid data (SSO, MFA and etc)

//TESTS WITH FAKE DATA

describe('Error message', () => {
  
  it('An error message is displayed if email/password is wrong', () => {  
    cy.clearCookies()
    cy.visit('https://app2.abtasty.com/login')
    cy.fillInputs()
    cy.get('button').contains('Sign in').click()
    cy.findByText('Please enter a valid email or password')
  })  
})

//TESTKEY FOR CAPTCHA REQUIRED
/*describe('Captcha', () => {
  
  it('After 3 wrong attempts the Captcha is triggered', () => {    
    cy.get('button').contains('Sign in').click(2)
    cy.wait(500)
    cy.confirmCaptcha()
})
})*/

describe('Eye button', () => {
  
  it('Eye button allow to show/hide the password input', () => {    
    cy.get('[data-testid="password"]').should('[type=password]')
    cy.get('[data-testid="visibleM"]').click()
    cy.get('[data-testid="password"]').should('[type=text]')
    cy.get('[data-testid="visibleM"]').click()
    cy.get('[data-testid="password"]').should('[type=password]')
})
})
