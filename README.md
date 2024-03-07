# Work-Day-Scheduler
Week 7 Bootcamp Challenge

## Project Description

Work Day Planner application displaying a 9:00 to 17:00 daily calendar where user can input tasks/notes in the hourly time slots.

The app updates the date automatically, using Day.js.

The user input fields update styling automatically, changing the field colour 

A save button stores the data in local storage, which allows for the information to be recalled/persist when the page refreshes. 

A clear button deletes the user input in the time slots, allowing for a daily refresh of tasks and also empties the specific slot in local storage.

## Method

Day.js date formatting was used to update the starter code html header.

Using jquery, each time planner row gets dinamically assigned a time slot, an input field, a save button and a clear button.

Each input field also parses through the hour slot, getting the integer number which is then compared to the Day.js current hour. The application then assigns classes of past, present or future of separate colours to each input field, making it easier to identify the time of day the user is in. 

When the user presses the save button, the planner pushes the text input into local storage and recalls it if the page is refreshed.

A clear button was added as an extra feature, that allows the user to clear the specific time slot input from the input field and from the local storage. 

The css started code was slightly modified to accomodate for the Clear button feature. 

## References

Day.js formatting: https://day.js.org/docs/en/display/format

## Links for application

Link to the deployed application https://gabidragh.github.io/Work-Day-Scheduler/

Screenshot of the application ![Application Screenshot](screencapture-127-0-0-1-5501-Work-Day-Scheduler-index-html-2024-03-07-00_05_57.png?raw=true "Application Screenshot")






