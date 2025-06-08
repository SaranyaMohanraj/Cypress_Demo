class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com/')
  }

  clickSignUp() {
    cy.get('#signin2').click()
  }

  clickLogin() {
    cy.get('#login2').click()
  }

  clickCart() {
    cy.get('#cartur').click()
  }

  firstProduct() {
    return cy.get('.card-title a').first()
  }

  usernameLabel() {
    return cy.get('#nameofuser')
  }
}

export default HomePage