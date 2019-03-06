var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home-page.html"));
  });

  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/events.html"));
  });

  // blog route loads blog.html
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/form.html"));
  });

  app.get("/discussion", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/discussion.html"));
  });

};