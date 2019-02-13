'use strict';


// Load modules.

const Fs = require('fs');

const Lab = require('lab');
const Util  = require('../lib/util');

const { promisify } = require('util');


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

    test('createDirectory returns true after the directory was created', async () => {

        const created = await Util.createDirectory('test/dir');
        expect(created).to.be.true();

        // Clean up test.
        const rmdir = promisify(Fs.rmdir);
        await rmdir('test/dir');
    });

    test('createDirectory returns false if fails', async () => {

        const created = await Util.createDirectory('test/migration');
        expect(created).to.be.false();
    });
});
