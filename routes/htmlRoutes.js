var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Meeting.findAll({})
    .then(function (dbMeetings) {
      res.render("index", {
        msg: "Welcome!",
        meetings: dbMeetings
      });
    })
    .catch(function(err){
      console.error(err);
    });
  });

  // Load meeting page by id
  app.get("/meeting/:id", function (req, res) {
    db.Meeting.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbMeeting) {
        res.render("meeting", {
          meeting: dbMeeting
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
