class ProductsPage  {
    
    visitProductsPage()  {
        cy.visit("https://automationexercise.com/products")
    }

    checkProductsPageVisibility() {
        cy.url().should('include','https://automationexercise.com/products');
    }

    hoverOverProductAndAddToCart()  {
        cy.get('img[src="/get_product_picture/5"]').trigger('mouseover');
        //cy.get('a[data-product-id="5"]').click({ multiple: true });
        cy.get('a[data-product-id="5"]').first().click();
    }
}

export default ProductsPage;