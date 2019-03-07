
/*$(document).ready(function () {

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
        console.log(userInput);
        $.post("/api/posts/", userInput, function() {
            //window.location.href = "/discussion";
          });
        
   
 var newEvent = ("<div>");
    var newDiv = ("<div>");
    newDiv.addClass("card-stacked");
    var contentDiv = ("<div>");
    contentDiv.addClass("card-content");
    var breedsTitle = ("<h6>");
    breedsTitle.text("Breeds: ");
    var locationTitle = ("<h6>");
    locationTitle.text("Location: ");
    var dateTime = ("<h6>");
    dateTime.text("Date & Time: ");
    var name = ("<h6>");
    name.text("Name: ");
    var petName = ("<h6>");
    petName.text("Pet Name: ")

    var discussionCard = ("<div>");
    discussionCard.addClass("card-action");
    discussionCardLink = ("<a>");
    discussionCardLink.attr("href", "./discussion.html");
    
    newEvent.append(newDiv);
    newDiv.append(contentDiv);
    contentDiv.append(breedsTitle);
    contentDiv.append(locationTitle);
    contentDiv.append(dateTime);
    contentDiv.append(name);
    contentDiv.append(petName);

    discussionCard.append(newDiv);
    commentContainer.append(newEvent);
 
});

});
*/