//Function to display the date at the top of the planner, under the planner description 
function updateHeaderDate () {
    //Day.js used to format the current date
    var headerDate = dayjs().format('dddd, MMMM D YYYY');
    //Display the date in the html element
    document.getElementById('currentDay').innerText = headerDate;
}
//Call function

updateHeaderDate(); 

