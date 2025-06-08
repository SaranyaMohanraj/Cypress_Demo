class CartPage {
  productRows() {
    return cy.get('tr.success')
  }
}

export default CartPage
