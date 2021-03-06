// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err){
        console.error(err);
      });
  });

  

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      User: req.body.User,
      PetName: req.body.PetName,
      Breeds: req.body.Breeds,
      Location: req.body.Location,
      Date: req.body.Date,
      Time: req.body.Time
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err){
        console.error(err);
      });
  });
// Get route for retrieving a single post
app.get("/api/posts/:id", function(req, res) {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbPost) {
    console.log(dbPost);
    res.json(dbPost);
  })
  .catch(function(err){
    console.error(err);
  });
});
  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err){
        console.error(err);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err){
        console.error(err);
      });
  });
};