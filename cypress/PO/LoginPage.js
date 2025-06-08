class LoginPage {
  inputSignUpUsername(username) {
    cy.get('#sign-username').type(username)
  }

  inputSignUpPassword(password) {
    cy.get('#sign-password').type(password)
  }

  submitSignUp() {
    cy.get('button[onclick="register()"]').click()
  }

  inputLoginUsername(username) {
    cy.get('#loginusername').type(username)
  }

  inputLoginPassword(password) {
    cy.get('#loginpassword').type(password)
  }

  submitLogin() {
    cy.get('button[onclick="logIn()"]').click()
  }
}

export default LoginPage
