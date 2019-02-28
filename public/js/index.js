// Get references to page elements
var $meetingText = $("#meeting-text");
var $meetingDescription = $("#meeting-description");
var $submitBtn = $("#submit");
var $meetingList = $("#meeting-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveMeeting: function(meeting) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/meeting",
      data: JSON.stringify(meeting)
    });
  },
  getMeetings: function() {
    return $.ajax({
      url: "api/meetings",
      type: "GET"
    });
  },
  deleteMeeting: function(id) {
    return $.ajax({
      url: "api/meeting/" + id,
      type: "DELETE"
    });
  }
};

// refreshMeetings gets new meetings from the db and repopulates the list
var refreshMeetings = function() {
  API.getMeetings().then(function(data) {
    var $meetings = data.map(function(meeting) {
      var $a = $("<a>")
        .text(meeting.text)
        .attr("href", "/meeting/" + meeting.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": meeting.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $meetingList.empty();
    $meetingList.append($meetings);
  });
};

// handleFormSubmit is called whenever we submit a new meeting
// Save the new meeting to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var meeting = {
    text: $meetingText.val().trim(),
    description: $meetingDescription.val().trim()
  };

  if (!(meeting.text && meeting.description)) {
    alert("You must enter a meeting text and description!");
    return;
  }

  API.saveMeeting(meeting).then(function() {
    refreshMeetings();
  });

  $meetingText.val("");
  $meetingDescription.val("");
};

// handleDeleteBtnClick is called when a meeting's delete button is clicked
// Remove the meeting from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteMeeting(idToDelete).then(function() {
    refreshMeetings();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$meetingList.on("click", ".delete", handleDeleteBtnClick);
rsvpCounter.on("click", handleCounter);
