const { dictionaries } = require('kakunin');
const { BaseDictionary } = require('kakunin');

class GendersDictionary extends BaseDictionary {
    constructor() {
        super('genders', {
            'male': '1',
            'female': '2'
        });
    }
}

dictionaries.addDictionary(new GendersDictionary());