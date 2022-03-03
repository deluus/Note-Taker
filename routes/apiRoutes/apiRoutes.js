const store = require("../../controllers/noteController");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then((notes) => {
      return res.json(notes)
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// ADD and DELETE Routes for Notes

router.post("/notes",(req,res) => {
  store
  .addNote(req.body)
  .then((notes) => res.json(notes))
  .catch((err) => res.status(500).json(err))
});

router.delete("/notes/:id", (req,res) => {
 store
 .deleteNotes(req.params.id)
 .then(() => res.json({ok:true}))
 .catch((err) =>{
   console.log(err)
   res.status(500).json(err)
  })
});

module.exports = router;
