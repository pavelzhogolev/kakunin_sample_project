const { generators } = require('kakunin');
const Chance = require('chance');

class EmailGenerator {
  isSatisfiedBy(name) {
    return name === 'email';
  }

  generate() {
    let chance = new Chance();
    return Promise.resolve(chance.email());
  }
}

generators.addGenerator(new EmailGenerator());
