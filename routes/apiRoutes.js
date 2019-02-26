var db = require("../models");

module.exports = function (app) {
  // Get all events in database
  app.get("/api/events", function (req, res) {
    db.Event.findAll({})
      .then(function (dbEvents) {
        return res.json(dbEvents);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  //PUT route to update event by id
  app.put("/api/event/:id", function (req, res) {
    db.Event.update(req.body, {
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

  // Get all events with certain breed
  app.get("/api/events/:breed", function (req, res) {
    db.Event.findAll({
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

  // Get all events with certain category
  app.get("/api/events/:category", function (req, res) {
    db.Event.findAll({
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
  app.post("/api/new/event", function (req, res) {
    db.Event.create(req.body)
      .then(function (dbEvent) {
        return res.json(dbEvent);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  // Delete an example by id
  app.delete("/api/event/:id", function (req, res) {
    db.Event.destroy({
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
