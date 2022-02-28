const noteControllers = require('../../controllers/noteController');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    noteControllers
        .getNotes()
        .then((notes) => 
            res.json(notes))
        .catch((err) => {
            res.status(500).json((err))
        })
})


// ADD and DELETE Routes for Notes

module.exports = router;