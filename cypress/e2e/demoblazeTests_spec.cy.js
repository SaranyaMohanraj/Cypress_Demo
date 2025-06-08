import HomePage from '../PO/HomePage'
import LoginPage from '../PO/LoginPage'
import ProductPage from '../PO/ProductPage'
import CartPage from '../PO/CartPage'

describe('Demoblaze UI Automation with POM', () => {
  const home = new HomePage()
  const login = new LoginPage()
  const product = new ProductPage()
  const cart = new CartPage()

  const username = 'Autotestuser' + Math.floor(Math.random() * 10000)
  const password = 'Test1234'

  it('Sign Up a new user', () => {
    home.visit()
    home.clickSignUp()
    cy.wait(500)

    login.inputSignUpUsername(username)
    login.inputSignUpPassword(password)
    login.submitSignUp()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Sign up successful.')
    })

    cy.wait(1000)
  })

  it('Login with the new user', () => {
    home.visit()
    home.clickLogin()
    cy.wait(500)

    login.inputLoginUsername(username)
    login.inputLoginPassword(password)
    login.submitLogin()

    cy.wait(1000)
    home.usernameLabel().should('contain', `Welcome ${username}`)
  })

  it('Add product to cart multiple times and check cart', () => {
    home.visit()
    home.firstProduct().click()
    cy.wait(1000)

    for (let i = 0; i < 2; i++) {
      //cy.wait(5000)
      product.addToCart()
      //cy.wait(1000)
      /*cy.on('window:alert', (alertText) => {
        expect(alertText).to.eq('Product added.')
      })
      cy.wait(500)*/
    }

    home.clickCart()
    cy.wait(1000)
    cart.productRows().should('have.length', 2)
  })
})