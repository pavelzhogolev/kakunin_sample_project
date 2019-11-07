const { dictionaries } = require('kakunin');
const { BaseDictionary } = require('kakunin');

class CountriesDictionary extends BaseDictionary {
    constructor() {
        super('countries', {
            'United States' : '21'
        });
    }
}

dictionaries.addDictionary(new CountriesDictionary());