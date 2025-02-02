Feature: Add Products in Cart

    Scenario: User tries to add products into Cart
        Given I open the home page
        Then the Home page is visible
        When I click on the Products button
        Then the Products page is displayed
        When I hover over the first product and click Add to cart
        Then the first product is added to the cart
        When I click the Continue Shopping button
        Then I am redirected to the Products page
        When I hover over the second product and click Add to cart
        Then the second product is added to the cart
        When I click the View Cart button
        Then I should see both products in the cart
        Then I verify their prices, quantities, and the total price
