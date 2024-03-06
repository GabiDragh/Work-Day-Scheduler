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
      var hourDiv = $(`<div>`).addClass(`hour col-1`).text(hour);
      var textDiv = $(`<textarea>`).addClass(`textarea event-input col-9`);
      var saveBtn = $(`<button>`).addClass(`saveBtn col-1`).text('Save');
      var clearBtn = $('<button>').addClass('clearBtn col-1').text('Clear');

      // Append elements to each row and all rows to the container
      row.append(hourDiv, textDiv, saveBtn, clearBtn);
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
      console.log("I am pressing the save button");

      // Define variable to store text input for each similar fields 
      var inputText = $(this).siblings(".event-input").val().trim();

      // Identify parent row to use as index in the array when saving the input data
      var index = $(this).parent().index();
      console.log(inputText)

      // Define an array variable that gets the information existent in local storage. If nothing exists, create an empty array.
      var storedInputText = JSON.parse(localStorage.getItem("inputTexts")) || [];

      // Assign input to the time slot
      storedInputText[index] = inputText;

      // Store input text in local storage
      localStorage.setItem("inputTexts", JSON.stringify(storedInputText));

    });

     // DONE: Add a clear button next to save button to clear input text

    $(".clearBtn").on("click", function (event) {
      event.preventDefault();
      console.log("I am pressing the button"); //check if the button is working

      // Identify parent row to use as index in the array when deleting the input data
      var index = $(this).parent().index(); 

      //Get the stored array from local storage
      var storedInputText = JSON.parse(localStorage.getItem("inputTexts")) || [];  

      //Empty the value for current item in array
      storedInputText[index] = "";
      
      //Reset the array in local storage
      localStorage.setItem("inputTexts", JSON.stringify(storedInputText)); 

      //Clear the input field
      $(this).siblings(".event-input").val(""); 
  
    });


    // DONE: Function to call when page refreshes displaying the input text

    function callInput() {
      var storedInputText = JSON.parse(localStorage.getItem("inputTexts")) || [];

      $(".event-input").each(function (index) {
        $(this).val(storedInputText[index] || "");
      });
    }
    
  }

  //Call functions
  updateHeaderDate();
  dailyPlanner();

});