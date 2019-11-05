const { BasePage } = require('kakunin');

class AccountCreationPage extends BasePage {
  constructor() {
    super();

    this.url = '/index.php?controller=authentication&back=my-account#account-creation';

    this.createAccountForm = element(by.css("#account-creation_form"));

    //PERSONAL INFORMATION
    this.genderRadioGroup = element.all(by.css('input[name="id_gender"]'));
    this.firstNameInput = element(by.css("#customer_firstname"));
    this.lastNameInput = element(by.css("#customer_lastname"));
    this.emailInput = element(by.css("#email"));
    this.passwordInput = element(by.css("#passwd"));
    this.dobDaySelect = element(by.css("#days"));
    this.dobMonthSelect = element(by.css("#months"));
    this.dobYearSelect = element(by.css("#years"));

    //ADDRESS INFORMATION
    this.addressFirstNameInput = element(by.css("#firstname"));
    this.addressLastNameInput = element(by.css("#lastname"));
    this.companyInput = element(by.css("#company"));
    this.address1Input = element(by.css("#address1"));
    this.address2Input = element(by.css("#address2"));
    this.cityInput = element(by.css("#city"));
    this.stateSelect = element(by.css("#id_state"));
    this.postalCodeInput = element(by.css("#postcode"));
    this.countrySelect = element(by.css("#id_country"));
    this.additionalInfoTextArea = element(by.css("#other"));
    this.homePhoneInput = element(by.css("#phone"));
    this.mobilePhoneInput = element(by.css("#phone_mobile"));
    this.addressAliasInput = element(by.css("#alias"));

    this.registerButton = element(by.css("#submitAccount"));
  }
}

module.exports = AccountCreationPage;
