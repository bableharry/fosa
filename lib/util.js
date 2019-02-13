'use strict';


// Load modules.

const Util = require('util');
const Fs = require('fs');



const directoryExists = async (path) => {

    const access = Util.promisify(Fs.access);

    try {
        await access(path);
        return true;
    }
    catch (error) {
        return false;
    }
};


module.exports = { directoryExists };
