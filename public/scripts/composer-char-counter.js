$(document).ready(function () {
  
  $("#tweet-text").on("input", function() {
    const textValue = $(this).val()
    const textLength = textValue.length
    const remainingText = 140 - textLength
    if (remainingText < 0) {
      $(".counter").css("color", "red");

    } else {
    $(".counter").css("color", "black");
      console.log('black') }
    $(".counter").text(remainingText)
  });
});