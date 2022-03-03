const fs = require('fs');
const util = require('util');
const path = require("path");

const  { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {
    return readFileAsync('db/db.json', 'utf8');
}

function write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note))
}
// creates a new class called "store"
// a data array will be created inside one of the functions
// getNotes,addNotes, and deleteNotes
class Store {
    constructor() {
        this.lastId = 0;
    };
    read() {
        return readFileAsync(path.join(__dirname, "../db/db.json"), "utf8");
    };
    write(note) {
        return writeFileAsync(path.join(__dirname, "../db/db.json"), JSON.stringify(note));
    };
//    const
// this.read
    getNotes = exports.getNotes = function() {
        return this.read().then((notes) => {
        let parsedNotes = JSON.parse(notes) || [];
        return parsedNotes;
        });
    };



// Do ADD and Delete Controllers for db/db.json file

addNote(note) {
    //create new obj with notes param using notes.title and notes.text
    let {title, text} = note;

    let newNote = {title, text, id: uuidv1()}
    return this.getNotes().then(notes => {
        // console.log(newNote, notes);
        const newNoteList = [...notes, newNote]; // Creates a new array with the memebers of the array notes and adds newNote to the end
        console.log(newNoteList);
        //  convert to a string
        return this.write(newNoteList);
    })
    //this.read().then(youll get info back)
    //this.write with old json info and new obj from frontend
};
deleteNotes(id) {
    // use the filter function
    return this.getNotes()
        .then(notes => {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].id === id) {
                    // Splice takes i position, and then deletes the 1 note.
                    notes.splice(i, 1);
                    console.log(notes);
                    break;
                }
            }
            this.write(notes);
        })
};
}

const store = new Store;
 module.exports = store;
