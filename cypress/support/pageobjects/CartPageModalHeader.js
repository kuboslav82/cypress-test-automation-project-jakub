class CartPageModalHeader  {
    
    verifyProductAdded()  {
        cy.get('#cartModal').should('be.visible');
    }

    clickContinueShopping()  {
        cy.contains("Continue Shopping").click();
    }

    clickViewCart()  {
        cy.contains('u', 'View Cart').click();
    }

    verifyMultipleProductsAdded()  {
        cy.get('button.disabled').should('have.text', '2');
    }

    verifyCartDetails()  {

    }
}
export default CartPageModalHeader;