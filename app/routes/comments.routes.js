module.exports = app => {

 const comments = require("../controllers/comments.controller.js.js");

 var router = require("express").Router();

//create a new comment
router.post("/", comments.create);

//retrieve all comments
router.get("/", comments.findAll);

//retrive a single comment with id 
//router.get("/", comments.findOne);

// Delete a Patient with id
router.delete("/:id", comments.delete);
  
//delete all  Patient
router.delete("/", comments.deleteAll);

app.use('/api/comments', router);

};