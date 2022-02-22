import localeFr from '../fixtures/localeFr.json' 
import localeEn from '../fixtures/localeEn.json'

//TESTS WITH DIFFERENT LANGUAGES
const doLocaleTests = dict => {
  describe(`Locale specific tests (${dict.lang})`, () => {
    //Cypress hook - before
    before(() => {
      cy.visit('login', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', { value: `${dict.lang}-${dict.lang.toUpperCase()}` });
          Object.defineProperty(win.navigator, 'languages', { value: [dict.lang] });
          Object.defineProperty(win.navigator, 'accept_languages', { value: [dict.lang] });
        },
        headers: {
          'Accept-Language': dict.lang,
        },
      });
    })
    //Test №6
    describe('Reset your password '+ dict.lang, () => {  
      it('click on the link - Forgot your password', () => {
        cy.get('a').contains(dict.forgPass).click()        
        cy.url().should('include', 'reset-password')
      })  
    })
    //Test №7
    describe('Please enter a valid email '+ dict.lang, () => {  
      it('Click on the button - Send me the password reset link', () => {         
        cy.get('button').contains(dict.buttonPass).click()
        // we should have visible error now
        cy.findByText(dict.emailWarn)
      })  
    })
    //Test №8
    describe('Sent!', () => {  
      it('Click on the button - Send me the password reset link with email', () => { 
        cy.get('input[name=email]').type('name@abtasty.com')
        cy.get('button').contains(dict.buttonPass).click()
        // we should have visible error now
        cy.get('[data-testid="checkAloneIcon"]')
      })  
    })
    //Test №9
    describe('Verify the arrow button', () => {  
      it('Should Go back to email/password ', () => {         
        cy.get('[data-testid="chevronAloneLeftIcon"]').click()
        cy.url().should('include', 'login')
      })  
    })
    //TESTS WITH FAKE DATA
    //Test №10
    describe('Error message '+ dict.lang, () => {  
      it('An error message is displayed if email/password is wrong', () => {  
        cy.clearCookies()
        cy.fillInputs()
        cy.get('button').first().click()
        // we should have visible error now
        cy.findByText(dict.validWarn)
      })  
    })  
    //Test №13
    describe('Sign in with SSO', () => {  
      it('Click on the button - Sign in with SSO '+ dict.lang, () => {  
        cy.get('button').contains(dict.buttonSSO).click()
        cy.url().should('include', 'ssologin')
      })
    })
    //Test №14
    describe('Please enter a valid email - SSO '+ dict.lang, () => { 
      it('Click on the button - Send me the password reset link', () => {  
        cy.visit('ssologin')        
        cy.get('button').contains(dict.buttonSSOPass).click()
        // we should have visible error now
        cy.get('[data-testid="inputWrapper"]').contains(dict.SSOWarn)
      })  
    })
    //Test №15
    describe('Verify the arrow button - SSO', () => {  
      it('Should Go back to email/password ', () => {      
        cy.get('[data-testid="arrowAloneLeftIcon"]').click()
        cy.url().should('include', 'login')
      })  
    })
  })  
}

//Test №12
describe('Eye button', () => {  
  it('Eye button allow to show/hide the password input', () => { 
    //reduce noise in console.log
    const loginPath = 'login';
    cy.location("pathname", { log: false }).then((currentPath) => {
      if (currentPath !== loginPath) {
        cy.visit(loginPath);
      }
    });
    //cy.visit('login') 
    cy.get('[data-testid="password"]').get('[type=password]')
    cy.get('[data-testid="showIcon"]').click()
    cy.get('[data-testid="password"]').get('[type=text]')
    cy.get('[data-testid="hideIcon"]').click()
    cy.get('[data-testid="password"]').get('[type=password]')
  })
})  
//TESTKEY FOR CAPTCHA REQUIRED 
//Test №11
/*describe('Captcha', () => {  
  it('After 3 wrong attempts the Captcha is triggered', () => {    
    cy.get('button').first().click(2)
    cy.wait(500)
    cy.confirmCaptcha()
})
})*/    
//TESTS WITH VALID DATA
//VALID DATA SET REQUIRED
/*describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.get(('[data-testid="email"]').type(user.email)
      cy.get('[data-testid="password"]').type(user.password)
      cy.get('button').first().click()
      cy.hash().should('eq', '#/')
    })
  })
})*/   // + all cases with Valid data (SSO, MFA and etc)

doLocaleTests(localeFr)
doLocaleTests(localeEn)