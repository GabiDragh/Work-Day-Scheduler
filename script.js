$(document).ready(function () {
    
  //DONE: Function to display the date at the top of the planner, under the planner description
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
    // Call the function that remembers the text after page refresh
    callInput(); 

    // TODO:Function to update time block - past, present, future
    function updateTimeblocks() {

    }

    // DONE: Function to handle event - save button

    $(".saveBtn").on("click", function (event) {
      event.preventDefault();
      // Define variable to store text input for each similar fields 
      var inputText = $(this).siblings(".event-input").val().trim();
      console.log(inputText)
      // Define an array variable that gets the information existent in local storage. If nothing exists, create an empty array.
      var storedInputText = JSON.parse(localStorage.getItem("inputTexts")) || [];

      // Push the existing text into the array
      storedInputText.push(inputText);

      // Store input text in local storage
      localStorage.setItem("inputTexts", JSON.stringify(storedInputText));

    });

    // DONE: Function to call when page refreshes displaying the input text

    function callInput() {
      var storedInputText = JSON.parse(localStorage.getItem("inputTexts")) || [];

      $(".event-input").each(function (index) {
        $(this).val(storedInputText[index] || "");
      });
    }
    
  }
  // TODO: Add a clear button next to save button to clear input text

  
  //Call functions
  updateHeaderDate();
  dailyPlanner();

});