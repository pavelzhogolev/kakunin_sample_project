const { BasePage } = require('kakunin');

class HomePage extends BasePage {
  constructor() {
    super();

    this.url = '/index.php';

    this.signInButton = element(by.css('.login'));
  }
}

module.exports = HomePage;
