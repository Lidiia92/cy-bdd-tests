const URL = 'http://zero.webappsecurity.com/feedback.html';
const NAME_INPUT = '#name';
const EMAIL_INPUT = '#email';
const SUBJECT_INPUT = '#subject';
const COMMENT = '#comment';
const SUBMIT_BUTTON = 'input[name="submit"]';

class FeedbackPage {
	static visit() {
		cy.visit(URL);
	}

	static fillFeedbackForm() {
		cy.get(NAME_INPUT).type('Name');
		cy.get(EMAIL_INPUT).type('testemail@gmail.com');
		cy.get(SUBJECT_INPUT).type('Subject');
		cy.get(COMMENT).type('Comment');
	}

	static submitFeedbackForm() {
		cy.click(SUBMIT_BUTTON).click();
	}
}
