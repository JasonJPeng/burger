// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

$(".devour").on("click", function(event) {
    // Make sure to preventDefault on a submit event.

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $(this).attr("data-id");

    // Send the PUT request.
    $.ajax("/api/devour/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  
})