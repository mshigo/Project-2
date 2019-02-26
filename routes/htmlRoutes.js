var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Event.findAll({})
    .then(function (dbEvents) {
      res.render("index", {
        msg: "Welcome!",
        events: dbEvents
      });
    })
    .catch(function(err){
      console.error(err);
    });
  });

  // Load event page and pass in an event by id
  app.get("/event/:id", function (req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbEvent) {
        res.render("event", {
          event: dbEvent
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
