var db = require("../models");

module.exports = function (app) {
  // Get all meetings in database
  app.get("/api/meetings", function (req, res) {
    db.Meeting.findAll({})
      .then(function (dbEvents) {
        return res.json(dbEvents);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  //PUT route to update meeting by id
  app.put("/api/meeting/:id", function (req, res) {
    db.Meeting.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function (dbEvent) {
        return res.json(dbEvent);
      })
      .catch(function (err) {
        console.error(err);
      })
  });

  // Get all meetings with certain breed
  app.get("/api/meetings/:breed", function (req, res) {
    db.Meeting.findAll({
      where: {
        breed: req.params.breed
      }
    })
      .then(function (dbEvents) {
        return res.json(dbEvents);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  // Get all meetings with certain category
  app.get("/api/meetings/:category", function (req, res) {
    db.Meeting.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function (dbEvents) {
        return res.json(dbEvents);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  // Create a new event
  app.post("/api/new/meeting", function (req, res) {
    db.Meeting.create(req.body)
      .then(function (dbEvent) {
        return res.json(dbEvent);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  // Delete an event by id
  app.delete("/api/meeting/:id", function (req, res) {
    db.Meeting.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbEvent) {
        return res.json(dbEvent);
      })
      .catch(function (err) {
        console.error(err);
      });
  });
};
