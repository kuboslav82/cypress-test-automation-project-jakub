import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../support/pageobjects/HomePage";
import LoginPage from "../support/pageobjects/LoginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

When("I click on the Login button", () => {
    homePage.clickOnLoginButton();
});

Then("The login page is displayed", () => {
    loginPage.checkLoginPageVisibility();
});

When("I enter incorrect credentials", () => {
    loginPage.enterWrongCredentials();
});

Then("I click on the Login button under Login page", () => {
    loginPage.clickOnTheLoginButton();
});

Then("Error message is displayed", () => {
    loginPage.checkErrorMessage();
});
