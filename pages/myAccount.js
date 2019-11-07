const { BasePage } = require('kakunin');

class MyAccountPage extends BasePage {
  constructor() {
    super();

    this.url = '/index.php?controller=my-account';

    this.accountNameHeader = element(by.css("div.header_user_info > a > span"));
  }
}

module.exports = MyAccountPage;
