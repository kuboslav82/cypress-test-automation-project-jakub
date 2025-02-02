class LoginPage {
    
    visitLoginPage () {
        cy.visit("https://automationexercise.com/login");
    } 
 
    checkLoginPageVisibility () {
        cy.get(".logo").should("be.visible");
    }
    
    enterWrongCredentials () {
        cy.get('[data-qa="login-email"]').type("email@email.com");
        cy.get('[data-qa="login-password"]').type("asghghgdhs");
    }

    clickOnTheLoginButton () {
        cy.get('[data-qa="login-button"]').click()
    }

    checkErrorMessage () {
        cy.contains('Your email or password is incorrect!', { timeout: 10000 }).should('be.visible');
    }
}

export default LoginPage;