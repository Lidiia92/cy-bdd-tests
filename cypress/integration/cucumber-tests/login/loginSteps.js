import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the login page', () => {
	cy.visit('http://zero.webappsecurity.com/login.html');
});

When('I submit the login form', () => {
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
});

Then('I should see the home page', () => {
	cy.get('#account_summary_tab').should('be.visible');
});
