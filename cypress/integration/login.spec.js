//TESTS WITH VALID DATA
//VALID DATA SET REQUIRED
/*describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.findByLabelText(('[data-testid="email"]').type(user.email)
      cy.findByLabelText('[data-testid="password"]').type(user.password)
      cy.findByText(/submit/i).click()
      cy.hash().should('eq', '#/')
    })
  })
})*////////////   + all cases with Valid data (SSO, MFA and etc)

//TESTS WITH FAKE DATA
//Test №6
describe('Error message', () => {  
  it('An error message is displayed if email/password is wrong', () => {  
    cy.clearCookies()
    cy.visit('/login')
    cy.fillInputs()
    cy.get('button').contains('Sign in').click()

    // we should have visible error now
    cy.findByText('Please enter a valid email or password')
    cy.clearCookies()
  })  
})

//TESTKEY FOR CAPTCHA REQUIRED 
//Test №7
/*describe('Captcha', () => {  
  it('After 3 wrong attempts the Captcha is triggered', () => {    
    cy.get('button').contains('Sign in').click(2)
    cy.wait(500)
    cy.confirmCaptcha()
})
})*/
//Test №8
describe('Eye button', () => {  
  it('Eye button allow to show/hide the password input', () => {    
    cy.get('[data-testid="password"]').get('[type=password]')
    cy.get('[data-testid="visibleM"]').click()
    cy.get('[data-testid="password"]').get('[type=text]')
    cy.get('[data-testid="notVisibleM"]').click()
    cy.get('[data-testid="password"]').get('[type=password]')
})
})
//Test №9
describe('Reset your password', () => {  
  it('click on the link - Forgot your password', () => {   
    cy.get('a').contains('Forgot your password').click()
    cy.url().should('include', 'reset-password')
  })  
})
//Test №10
describe('Please enter a valid email', () => {  
  it('Click on the button - Send me the password reset link', () => {  
    cy.get('button').contains('Send me the password').click()
    // we should have visible error now
    cy.findByText('Please enter a valid email')
  })  
})
//Test №11
describe('Sent!', () => {  
  it('Click on the button - Send me the password reset link with email', () => { 
    cy.get('input[name=email]').type('name@abtasty.email')
    cy.get('button').contains('Send me the password').click()
    // we should have visible error now
    cy.findByText('Sent!')
  })  
})