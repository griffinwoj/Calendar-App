
$(document).ready(function () {
  $('button').click(function () {
    $('p').toggle();
  });

  $(".saveBtn").on("click", function () {
    var newEvent = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, newEvent);
  });
  

  const buttons = document.querySelectorAll("save");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {

      const timeBlock = event.target.closest(".time-block");
      const timeBlockId = timeBlock.id;
      console.log("Clicked button in time-block with id:", timeBlockId);

      const input = timeBlock.querySelector("input");
      const description = input.value;
      localStorage.setItem(timeBlockId, description);
    })
  }

  var timeBlock = $("#time-block-9am");
  timeBlock.attr("id", "time-block-05pm");


  $(".time-block").each(function () {
    var row = parseInt($(this).attr("id").split("-")[1])
    var dt = new Date();
    var currentHour = dt.getHours();
    console.log(row);
    console.log(currentHour);
    if (row < currentHour) {
      $(this).addClass("past");
    } if (row > currentHour) {
      $(this).addClass("future");

    } if (row === currentHour) {
      $(this).addClass("present");
    }
  });

  const currentHour = dayjs().hour();

  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const savedEvent = localStorage.getItem(timeBlockId);
    if (savedEvent !== null) {
      $(this).find(".description").val(savedEvent);
    }
  });

  const today = dayjs().format('MMMM-DD-YYYY hh:A');
  $("#currentDate").text(today);
});