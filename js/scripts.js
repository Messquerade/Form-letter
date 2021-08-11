$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("Input#name").val();

    $(".name").text(nameInput);

    $("#letter").show();
  })
})