//Target HTML files 
var displayDate = document.querySelector('#currentDay');
// var timeBlock = document.querySelector("#timeblock");
var plannerContainer = document.querySelector('.container');
var hours = document.querySelector('#hourId');



//Function to display the date at the top of the planner, under the planner description 
function updateHeaderDate () {
    //Day.js used to format the current date
    var headerDate = dayjs().format('dddd, MMMM D YYYY');
    //Display the date in the html element
    displayDate.innerText = headerDate;
}
//Call function
updateHeaderDate(); 

//Create planner

//  function createPlanner() {

//    //Create time blocks table 
//    //1. Create table div in HTML
//    var table = $('<table>');
//    //2. Add content - class to match css style
//    table.addClass('time-block');
//    //3. Append to container
//    plannerContainer.append('table');
// //    console.log(plannerContainer + 'Hello');
$(document).ready(function(){
    var times = [
                '9AM',
                '10AM',
                '11AM',
                '12AM',
                '13PM',
                '14PM',
                '15PM',
                '16PM',
                '17PM',
];

for (var i = 0; i < times.length; i++) {
    
    var hourSlot = hours.text(times[i]);
    console.log(hourSlot);

}
})
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

// createPlanner();




    
