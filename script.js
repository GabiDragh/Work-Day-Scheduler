$(document).ready(function () {
    
  //Function to display the date at the top of the planner, under the planner description
  function updateHeaderDate() {
    //Day.js used to format the current date
    var headerDate = dayjs().format("dddd, MMMM D YYYY");
    console.log(headerDate);
    //Display the date in the html element
    $("#currentDay").text(headerDate);
  }
  
  // Function for daily planner elements

  function dailyPlanner() {

      //Define variable to store the time slots
      var timeslots = [
      "9AM",
      "10AM",
      "11AM",
      "12AM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
    ];

    // Target the container where the time slots will append to
    var container = $(`.container`);

    // Loop through the array to assign each time slot
    for (i = 0; i < timeslots.length; i++) {
      var hour = timeslots[i];

      // Create, add properties to each element - hour, text input area and save button
      var row = $(`<div>`).addClass(`time-block row`);
      var hourDiv = $(`<div>`).addClass(`hour col`).text(hour);
      var textDiv = $(`<textarea>`).addClass(`textarea event-input col`);
      var saveBtn = $(`<button>`).addClass(`saveBtn col`);

      // Append elements to each row and all rows to the container
      row.append(hourDiv, textDiv, saveBtn);
      container.append(row);
      
    }

    // Function to store input in local storage
    function storeInput() {

    }

    // Function to update time block - past, present, future
    function updateTimeblocks() {

    }

    // Function to handle event - save button

    function handleSaveButton (event) {
      
    }
    

  }

  //Call functions
  updateHeaderDate();
  dailyPlanner();
});