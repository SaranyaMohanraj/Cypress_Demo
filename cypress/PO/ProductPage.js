class ProductPage {
  addToCart() {
    cy.get('.btn-success').contains('Add to cart').click()
  }
}

export default ProductPage
