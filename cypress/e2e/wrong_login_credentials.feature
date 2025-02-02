Feature: Login with incorrect credentials

    Scenario: User tries to enter invalid email and password
        Given I open the home page
        Then Home page is visible
        When I click on the Login button
        Then The login page is displayed
        When I enter incorrect credentials
        Then I click on the Login button under Login page
        Then Error message is displayed
