Feature: Example feature file

  Scenario: Example scenario
    When I visit the "home" page
    And I click the "signInButton" element
    And the "signIn" page is displayed
    And I fill the "createAccountForm" form with:
      | emailAddress | g:email |
    And I click the "createAccountButton" element
    And the "accountCreation" page is displayed
    And I fill the "createAccountForm" form with:
      | genderRadioGroup       | 1                       |
      | firstNameInput         | John                    |
      | lastNameInput          | Doe                     |
      | emailInput             | john.doe@yahoo.com      |
      | passwordInput          | Mzaq1xsw2               |
      | dobDaySelect           | 1                       |
      | dobMonthSelect         | 1                       |
      | dobYearSelect          | 1990                    |
      | addressFirstNameInput  | John                    |
      | addressLastNameInput   | Doe                     |
      | companyInput           | My Company              |
      | address1Input          | 240 St South            |
      | cityInput              | Wilmington              |
      | stateSelect            | 8                       |
      | postalCodeInput        | 19805                   |
      | countrySelect          | 21                      |
      | additionalInfoTextArea | Some cool info about me |
      | mobilePhoneInput       | 12346578                |
      | addressAliasInput      | Primary address         |
    Then the "myAccount" page is displayed