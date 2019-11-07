Feature: Example feature file

  Scenario: Account Creation Scenario
    Given I visit the "home" page
    When I click the "signInButton" element
    Then the "signIn" page is displayed
    When I fill the "createAccountForm" form with:
      | emailAddress | g:email |
    And I click the "createAccountButton" element
    Then the "accountCreation" page is displayed
    When I fill the "createAccountForm" form with:
      | genderRadioGroup       | d:genders:male            |
      | firstNameInput         | John                      |
      | lastNameInput          | Doe                       |
      | emailInput             | v:generatedEmail          |
      | passwordInput          | Mzaq1xsw2                 |
      | dobDaySelect           | 1                         |
      | dobMonthSelect         | 1                         |
      | dobYearSelect          | 1990                      |
      | addressFirstNameInput  | John                      |
      | addressLastNameInput   | Doe                       |
      | companyInput           | Some Great Company        |
      | address1Input          | 2400 W 17th St            |
      | cityInput              | Wilmington                |
      | stateSelect            | d:states:Delaware         |
      | postalCodeInput        | 19805                     |
      | countrySelect          | d:countries:United States |
      | additionalInfoTextArea | Some cool info about me   |
      | mobilePhoneInput       | 12346579                  |
      | addressAliasInput      | Primary address           |
    And I click the "registerButton" element
    Then the "myAccount" page is displayed
    And there is element "accountNameHeader" containing "John Doe" text