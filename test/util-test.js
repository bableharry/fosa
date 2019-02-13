'use strict';


// Load modules.

const Lab = require('lab');
const Util  = require('../lib/util');


const { expect } = require('code');


const { experiment, test } = exports.lab = Lab.script();


experiment('util', () => {

    test('isDirectory returns true when it exists', async () => {

        const exists = await Util.directoryExists('test/migration');
        expect(exists).to.be.true();
    });

    test('isDirectory returns false when it does not exists', async () => {

        const exists = await Util.directoryExists('doesNotExists');
        expect(exists).to.be.false();
    });
});
