Feature: Login to App

    As a valid user
    I want to be able to login into the App

    Scenario: Valid login
        Given I open the login page
        When I submit the login form
        Then I should see the home page