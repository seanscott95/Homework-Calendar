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





var tenAmTextArea = localStorage.getItem("ten-text");
$("#ten-am").val(tenAmTextArea);

$("#submit-ten-am").on("click", () => {
    var newText = $("#ten-am").val();
    localStorage.setItem("ten-text", newText);
    console.log(newText);
});


var elevenAmTextArea = localStorage.getItem("eleven-text");
$("#eleven-am").val(elevenAmTextArea);

$("#submit-eleven-am").on("click", () => {
    var newText = $("#eleven-am").val();
    localStorage.setItem("eleven-text", newText);
    console.log(newText);
});


var twelvePmTextArea = localStorage.getItem("twelve-text");
$("#twelve-pm").val(twelvePmTextArea);

$("#submit-twelve-pm").on("click", () => {
    var newText = $("#twelve-pm").val();
    localStorage.setItem("twelve-text", newText);
    console.log(newText);
});


var onePmTextArea = localStorage.getItem("one-text");
$("#one-pm").val(onePmTextArea);

$("#submit-one-pm").on("click", () => {
    var newText = $("#one-pm").val();
    localStorage.setItem("one-text", newText);
    console.log(newText);
});


var twoPmTextArea = localStorage.getItem("two-text");
$("#two-pm").val(twoPmTextArea);

$("#submit-two-pm").on("click", () => {
    var newText = $("#two-pm").val();
    localStorage.setItem("two-text", newText);
    console.log(newText);
});


var threePmTextArea = localStorage.getItem("three-text");
$("#three-pm").val(threePmTextArea);

$("#submit-three-pm").on("click", () => {
    var newText = $("#three-pm").val();
    localStorage.setItem("three-text", newText);
    console.log(newText);
});


var fourPmTextArea = localStorage.getItem("four-text");
$("#four-pm").val(fourPmTextArea);

$("#submit-four-pm").on("click", () => {
    var newText = $("#four-pm").val();
    localStorage.setItem("four-text", newText);
    console.log(newText);
});


var fivePmTextArea = localStorage.getItem("five-text");
$("#five-pm").val(fivePmTextArea);

$("#submit-five-pm").on("click", () => {
    var newText = $("#five-pm").val();
    localStorage.setItem("five-text", newText);
    console.log(newText);
});