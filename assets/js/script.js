//Target HTML files 
var displayDate = document.querySelector('#currentDay');
// var timeBlock = document.querySelector("#timeblock");
var timeContainer = document.querySelector('.container');



//Function to display the date at the top of the planner, under the planner description 
function updateHeaderDate () {
    //Day.js used to format the current date
    var headerDate = dayjs().format('dddd, MMMM D YYYY');
    //Display the date in the html element
    displayDate.innerText = headerDate;
}
//Call function
updateHeaderDate(); 

//Create time blocks table
// function createTimeBlocks() {

    var times = [
                '9AM',
                '10AM',
                '11AM',
                '12AM',
                '13PM',
                '14PM',
                '15PM',
                '16PM',
                '17PM'
];

for (var i = 0; i < times.length; i++) {
    var hours = times[i];
    console.log(hours);
}
//     //Create table section in html
//     var timeTable = $('<table>');
//     //Add content to match css file attributes
//     timeTable.addClass('time-block row');
    
//     append timetable

// create columns inside each row
//assign each first column with an hour
//assign each second column with day.js formatting for time passing and form for text input
//assign last column with save button and a hover effect. After button is pressed, data gets stored in local storage (create array var for that!!!)
// }






    
