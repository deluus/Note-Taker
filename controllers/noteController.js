const fs = require('fs');
const util = require('util');

const  { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {
    return readFileAsync('db/db.json', 'utf8');
}

function write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note))
}

const getNotes = exports.getNotes = function() {
    return read().then((notes) => {
        let parsedNotes = JSON.parse(notes) || [];
        return parsedNotes;
    })
}

// Do ADD and Delete Controllers for db/db.json file
