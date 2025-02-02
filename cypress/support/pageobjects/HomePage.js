class HomePage {
    
    visitHomePage() {
        cy.visit("https://automationexercise.com/");
    } 
 
    checkHomePageVisibility() {
        cy.get(".logo").should("be.visible");
    }

    clickOnLoginButton() {
        cy.get("i.fa.fa-lock").click();
    }

    clickOnProductsButton() {
        cy.contains('li a', 'Products').click();
    }


}

export default HomePage;