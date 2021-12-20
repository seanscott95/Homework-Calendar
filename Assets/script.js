// Display current day and date using moment
// Each hour must have a respepctive colour depending on the hour
// If the hour has past display time as grey, if else it is hte current hour display red, else display green
// Save button saves textarea to localStorage


// Displays current day and time in - Monday, December 12th - format
var currentDay = moment().format("dddd, MMMM Mo");
$("#currentDay").text(currentDay);

// Save button saves textarea to localStorage
var nineAmTextArea = localStorage.getItem("nine-text");
$("#nine-am").val(nineAmTextArea);

$("#submit-nine-am").on("click", () => {
    var newText = $("#nine-am").val();
    localStorage.setItem("nine-text", newText);
    console.log(newText);
});
 

// If the hour has past display time as grey, if else it is the current hour display red, else display green




