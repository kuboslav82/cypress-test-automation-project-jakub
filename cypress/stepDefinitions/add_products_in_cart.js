import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../support/pageobjects/HomePage";
import LoginPage from "../support/pageobjects/LoginPage";
import ProductsPage from "../support/pageobjects/ProductsPage";
import CartPageModalHeader from "../support/pageobjects/CartPageModalHeader";

const homePage = new HomePage();
const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPageModalHeader = new CartPageModalHeader();


Given("I open the home page", () => {
    homePage.visitHomePage();
});

Then("the Home page is visible", () => {
    homePage.checkHomePageVisibility();
});

When("I click on the Products button", () => {
    homePage.clickOnProductsButton();
    cy.wait(5000);
});

Then("the Products page is displayed", () => {
    productsPage.checkProductsPageVisibility();
});

// Step: Hover over the first product and click "Add to Cart"
When("I hover over the first product and click Add to cart", () => {
    productsPage.hoverOverProductAndAddToCart(); // Assuming index 1 is the first product
});

// Step: Verify the first product is added to the cart
Then("the first product is added to the cart", () => {
    cartPageModalHeader.verifyProductAdded();
});

// Step: Click the Continue Shopping button
When("I click the Continue Shopping button", () => {
    cartPageModalHeader.clickContinueShopping();
});

// Step: Verify redirection to the Products page
Then("I am redirected to the Products page", () => {
    productsPage.checkProductsPageVisibility()
});

// Step: Hover over the second product and click "Add to Cart"
When("I hover over the second product and click Add to cart", () => {
    productsPage.hoverOverProductAndAddToCart(); // Assuming index 2 is the second product
});

// Step: Verify the second product is added to the cart
Then("the second product is added to the cart", () => {
    cartPageModalHeader.verifyProductAdded();
});

// Step: Click the View Cart button
When("I click the View Cart button", () => {
    cartPageModalHeader.clickViewCart();
});

// Step: Verify both products are in the cart
Then("I should see both products in the cart", () => {
    cartPageModalHeader.verifyMultipleProductsAdded();
});

// Step: Verify prices, quantities, and total price
Then("I verify their prices, quantities, and the total price", () => {
    cartPageModalHeader.verifyCartDetails();
});