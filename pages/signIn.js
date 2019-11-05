const { BasePage } = require('kakunin');

class SignInPage extends BasePage {
  constructor() {
    super();

    this.url = '/index.php?controller=authentication&back=my-account';

    this.createAccountForm = element(by.css("#create-account_form"));
    this.emailAddress = element(by.css("#email_create"));
    this.createAccountButton = element(by.css("#SubmitCreate"));
  }
}

module.exports = SignInPage;
