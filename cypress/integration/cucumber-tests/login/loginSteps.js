import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

Given('I open the login page', () => {
	// cy.visit('http://zero.webappsecurity.com/login.html');
	LoginPage.visitLoginPage();
});

When('I fill username with {string}', (username) => {
	LoginPage.fillUsername(username);
});

When('I fill password with {string}', (password) => {
	LoginPage.fillPassword(password);
});

When('I click on submit login', () => {
	LoginPage.submit();
});

Then('I should see the home page', () => {
	cy.get('#account_summary_tab').should('be.visible');
});
