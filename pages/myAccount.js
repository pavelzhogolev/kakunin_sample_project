const { BasePage } = require('kakunin');

class MyAccountPage extends BasePage {
  constructor() {
    super();

    this.url = '/index.php?controller=my-account';
  }
}

module.exports = MyAccountPage;
