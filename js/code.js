///<reference types="../@types/jquery" />;

$(".btn-close").on("click", function () {
  $(".left-minu").animate({ left: "-270px" }, 1000);
});
$(".open-togle ").on("click", function () {
  $(".left-minu").animate({ left: "0px" }, 1000);
});

$(".singer").on("click", function () {
  $(this).next().slideToggle(800);
  $(".singer-inner .inner-p").not($(this).next()).slideUp(800);
});

setInterval(() => {
  // Create two Date objects representing the start and end times
  const startTime = new Date(); // Example start time
  const endTime = new Date("2024-08-20T00:00:00"); // Example end time

  // Calculate the difference in milliseconds
  const timeDifferenceMs = endTime - startTime;

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);

  $(".days").html(days + " D");
  $(".hours").html(hours + " H");
  $(".minu").html(minutes + " M");
  $(".second").html(seconds + " S");
}, 1000);
function TextArea() {
  let texAreaLength = $("textarea").val();
  $(".h6 span").html(`${100 - texAreaLength.length}`);
}
