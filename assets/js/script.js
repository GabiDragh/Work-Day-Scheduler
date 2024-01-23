//Target HTML files
// var displayDate = document.querySelector('#currentDay');
// // var timeBlock = document.querySelector("#timeblock");
// var plannerContainer = document.querySelector('.container');
// var hours = document.querySelector('#hourId');
// var rowBlock = document.querySelector('.row-block');
// var tableBody = document.querySelector('.table-body');

$(document).ready(function () {
  //Function to display the date at the top of the planner, under the planner description
  function updateHeaderDate() {
    //Day.js used to format the current date
    var headerDate = dayjs().format("dddd, MMMM D YYYY");
    console.log(headerDate);
    //Display the date in the html element
    $("#currentDay").text(headerDate);
  }
  //Call function
  updateHeaderDate();

  //Create planner

  //  function createPlanner() {

  // for (var i = 1; i <= 9; i++) {
  //     var rows = [i];
  //     console.log(i);
  //     rows.addClass('row-block');
  //     rows.text([i]);
  //     console.log(rows);
  // tableBody.append(rows);

  // }
  //    //Create time blocks table
  //    //1. Create table div in HTML
  //    var table = $('<table>');
  //    //2. Add content - class to match css style
  //    table.addClass('time-block');
  //    //3. Append to container
  //    plannerContainer.append('table');
  // //    console.log(plannerContainer + 'Hello');
  // $(document).ready(function(){
  //     var times = [
  //                 '9AM',
  //                 '10AM',
  //                 '11AM',
  //                 '12AM',
  //                 '13PM',
  //                 '14PM',
  //                 '15PM',
  //                 '16PM',
  //                 '17PM',
  // ];

  // for (var i = 0; i < times.length; i++) {

  //     var hourSlot = $('div');
  //     hourSlot.addClass('hour');
  //     hourSlot.attr('data-hour', times[i]);
  //     hourSlot.text(times[i]);
  //     console.log(hourSlot);
  //     hours.append(hourSlot);
  //     console.log(hourSlot);

  // }
  // })
  // //Create table section in html
  // var tableRow = $('<div>');
  // //Add content to match css file attributes
  // tableRow.addClass('row');
  // tableRow.text(times[i]);
  // //Append row to timetable
  // $('.row').append(tableRow);
  // console.log(tableRow);

  // create columns inside each row
  //assign each first column with an hour
  //assign each second column with day.js formatting for time passing and form for text input
  //assign last column with save button and a hover effect. After button is pressed, data gets stored in local storage (create array var for that!!!)
  // }
    function timeSlots() {
      // createPlanner();
      var times = [
        "9AM",
        "10AM",
        "11AM",
        "12AM",
        "13PM",
        "14PM",
        "15PM",
        "16PM",
        "17PM",
      ];

      for (i = 0; i < times.length; i++) {
        var eachRow = times[i];
        console.log(eachRow);

        //1 Create table elements
        var newRow = $("<tr>");
        var hourSlot = $("<td>");
        var timeBlocks = $("<td>");
        var saveButtonSlot = $("<td>");

        // newRow.addClass("row");

        hourSlot.addClass("time-block row hour");
        hourSlot.attr("data-time");
        hourSlot.text(eachRow);

        timeBlocks.addClass("time-block row");

        var plannedInput = $("<input>");
        plannedInput.addClass("form-control");
        var saveButton = $("<button>");
        saveButton.addClass("time-block row saveBtn");

        saveButtonSlot.append(saveButton);
        timeBlocks.append(plannedInput);
        newRow.append(hourSlot, timeBlocks, saveButtonSlot);
        $("tbody").append(newRow);
      }
      timeblockView();
      saveProject();
    }

    timeSlots();

  //create planned activity

  //variable = time
  //if statement - present, past, future
  function timeblockView() {
     var timeBlocks = $(".row");
     var currentTime = dayjs().format("HHA");
     console.log(currentTime);
     timeBlocks.attr("data-hour", currentTime);
    // timeBlocks.each(function (idex, elem) {
    //     console.log({idex, elem});
    //     var elemHour = Number.parseInt($(this).attr("data-hour"));
    //     console.log(this);
    //     console.log(elemHour);

      var elemHour = Number.parseInt($(eachRow).attr("data-time"));
     console.log(elemHour);
  
     if (currentTime.hour() > elemHour) { //comparing apples with apples|!!!
        timeBlocks.addClass("past");
      } else if (currentTime.hour() == elemHour) {
        timeBlocks.addClass("present");
      } else {
        timeBlocks.addClass("future");
      }
    };

    timeblockView();

  });






