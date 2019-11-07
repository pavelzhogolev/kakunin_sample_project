const { dictionaries } = require('kakunin');
const { BaseDictionary } = require('kakunin');

class StatesDictionary extends BaseDictionary {
    constructor() {
        super('states', {
            'Alabama' : '1',
            'Delaware': '8',
            'Iowa'    : '15',
            'Oklahoma': '36'
        });
    }
}

dictionaries.addDictionary(new StatesDictionary());