const { generators } = require('kakunin');
const Chance = require('chance');
const { variableStore } = require('kakunin');

class EmailGenerator {
  isSatisfiedBy(name) {
    return name === 'email';
  }

  generate() {
    let chance = new Chance();
    let generatedEmail = chance.email()
    variableStore.storeVariable('generatedEmail', generatedEmail);
    return Promise.resolve(generatedEmail);
  }
}

generators.addGenerator(new EmailGenerator());
