$(document).ready(function () {
  $("#submit").on('click', function (event) {
    event.preventDefault();

    var userInput = {
      User: $('#userName').val().trim(),
      PetName: $('#petName').val().trim(),
      Breeds: $('#breed').val().trim(),
      Location: $('#location').val().trim(),
      Date: $('#date').val().trim(),
      Time: $('#time').val().trim()


    }
    $.post("/api/posts/", userInput, function () {
      window.location.href = "/events";
    });
  })

  $("#delete").on('click', deleteEvent($(this).data("id")))

  var eventContainer = $("#eventContainer");


  var events = [];
  function getEvents() {
    $.get("/api/posts", function (data) {
      events = data;
      console.log(data);
      initializeRows();
    });
  }

  getEvents();

  function initializeRows() {
    eventContainer.empty();
    var newRows = [];
    for (var i = 0; i < events.length; i++) {
      newRows.push(createNewEvent(events[i]));
    }
    eventContainer.prepend(newRows);
  }



  function createNewEvent(userInput) {
    var newInputRow = $(
      [
        "<div class='card horizontal card hoverable'>",
        "<div class='card-stacked'>",
        "<div class='card-content'>",
        "<h6> User Name: " + userInput.User + "</h6>",
        "<h6> Pet Name: " + userInput.PetName + "</h6>",
        "<h6> Breeds: " + userInput.Breeds + "</h6>",
        "<h6> Location: " + userInput.Location + "</h6>",
        "<h6> Date: " + userInput.Date + "</h6>",
        "<h6> Time: " + userInput.Time + "</h6>",
        "</div>",
        "<div class='btn-floating' id='delete'>minus",
        "</div>",
        "<div class= 'card-action'>",
        "<a href='/discussion'>Discussion Page</a>",
        "</div>",
        "</div>",
        "</div>"

      ].join("")
    )
    newInputRow.data("userInput", userInput);
    return newInputRow;
  }

  // This function does an API call to delete posts
  function deleteEvent() {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    }).then(getEvents);
  }



















})
