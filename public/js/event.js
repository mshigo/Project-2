$(document).ready(function() {
    $("#submit").on('click', function (event) {
        event.preventDefault();

        var userInput = {
            User: $('#userName').val().trim(),
            PetName: $('#petName').val().trim(),
            Breeds: $('#breed').val().trim(),
            Location: $('#location').val().trim(),
            Date: $('#date').val().trim(),
            Time: $('#time').val().trim(),
            


        }
        $.post("/api/posts/", userInput, function() {
            window.location.href = "/events";
          });

        })
        
var eventContainer = $("#eventContainer");
var infoCard = $("#infoCard");
var events = [];

function getEvents() {
    $.get("/api/posts", function(data) {
        events = data;
        console.log(data);
        initializeRows();
    });
}

getEvents();

function initializeRows() {
    eventContainer.empty();
    infoCard.empty();
    var newRows = [];
    var infoRows = [];
    for (var i = 0; i < events.length; i++) {
        newRows.push(createNewEvent(events[i]));
    }
    for (var i = 0; i < events.length; i++) {
      infoRows.push(createNewInfoCard(events[i]));
  }
    eventContainer.prepend(newRows);
    infoCard.prepend(infoRows);

}






function createNewEvent(userInput) {
    var newInputRow = $(
        [
"<div class='card horizontal card hoverable'>",
            "<div class='card-stacked'>",
              "<div class='card-content'>",
                "<h6> Event Coordinator: "  + userInput.User + "</h6>",
                "<h6> Pet Name: " + userInput.PetName + "</h6>",
                "<h6> Breeds: " + userInput.Breeds + "</h6>",
                "<h6> Location: " + userInput.Location + "</h6>",
                "<h6> Date: " + userInput.Date + "</h6>",
                "<h6> Time: " + userInput.Time + "</h6>",

              "</div>",
              
              "<div class='card-action'>",
                "<a href='/discussion'>Discussion Page</a>",
              "</div>",
            "</div>",
          "</div>"

        ].join("")
    )
    newInputRow.data("userInput", userInput);
    return newInputRow;
}

function createNewInfoCard(userInput) {
  var newInputRow = $(
      [

              "<h6> Event Coordinator: "  + userInput.User + "</h6>",
              "<h6> Pet Name: " + userInput.PetName + "</h6>",
              "<h6> Breeds: " + userInput.Breeds + "</h6>",
              "<h6> Location: " + userInput.Location + "</h6>",
              "<h6> Date: " + userInput.Date + "</h6>",
              "<h6> Time: " + userInput.Time + "</h6>",
              "<h6 id ='count'></h6>",

         

      ].join("")
  )
  newInputRow.data("userInput", userInput);
  return newInputRow;
}




















})
