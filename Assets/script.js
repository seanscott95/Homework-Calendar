//Week 5 Homework - Calendar

// Displays current day and time
var currentDay = moment();
$("#currentDay").text(currentDay);

// Displays key and values stored in local storage to appropiate text area and saves them to local storage.
// Applies to all blocks of code respective of the commented time
// 9am
var nineAmTextArea = localStorage.getItem("nine-text");
$("#nine-am").val(nineAmTextArea);

$("#submit-nine-am").on("click", () => {
    // Save button once clicked saves textarea to localStorage
    var newText = $("#nine-am").val();
    localStorage.setItem("nine-text", newText);
});

// 10am
var tenAmTextArea = localStorage.getItem("ten-text");
$("#ten-am").val(tenAmTextArea);

$("#submit-ten-am").on("click", () => {
    var newText = $("#ten-am").val();
    localStorage.setItem("ten-text", newText);
});

// 11am
var elevenAmTextArea = localStorage.getItem("eleven-text");
$("#eleven-am").val(elevenAmTextArea);

$("#submit-eleven-am").on("click", () => {
    var newText = $("#eleven-am").val();
    localStorage.setItem("eleven-text", newText);
});

// 12pm
var twelvePmTextArea = localStorage.getItem("twelve-text");
$("#twelve-pm").val(twelvePmTextArea);

$("#submit-twelve-pm").on("click", () => {
    var newText = $("#twelve-pm").val();
    localStorage.setItem("twelve-text", newText);
});

// 1pm
var onePmTextArea = localStorage.getItem("one-text");
$("#one-pm").val(onePmTextArea);

$("#submit-one-pm").on("click", () => {
    var newText = $("#one-pm").val();
    localStorage.setItem("one-text", newText);
});

// 2pm
var twoPmTextArea = localStorage.getItem("two-text");
$("#two-pm").val(twoPmTextArea);

$("#submit-two-pm").on("click", () => {
    var newText = $("#two-pm").val();
    localStorage.setItem("two-text", newText);
});

// 3pm
var threePmTextArea = localStorage.getItem("three-text");
$("#three-pm").val(threePmTextArea);

$("#submit-three-pm").on("click", () => {
    var newText = $("#three-pm").val();
    localStorage.setItem("three-text", newText);
});

// 4pm
var fourPmTextArea = localStorage.getItem("four-text");
$("#four-pm").val(fourPmTextArea);

$("#submit-four-pm").on("click", () => {
    var newText = $("#four-pm").val();
    localStorage.setItem("four-text", newText);
});

// 5pm
var fivePmTextArea = localStorage.getItem("five-text");
$("#five-pm").val(fivePmTextArea);

$("#submit-five-pm").on("click", () => {
    var newText = $("#five-pm").val();
    localStorage.setItem("five-text", newText);
});
 

// Creating hour to use in start() by setting each value as the respective time of hour
var currentHour = moment().hour(); // this variable recives the current hour to use as reference
var nineAm = moment().set("hour", 9).format("H"); // returns 9
var tenAm = moment().set("hour", 10).format("H");
var elevenAm = moment().set("hour", 11).format("H");
var twelvePm = moment().set("hour", 12).format("H");
var onePm = moment().set("hour", 13).format("H");
var twoPm = moment().set("hour", 14).format("H");
var threePm = moment().set("hour", 15).format("H");
var fourPm = moment().set("hour", 16).format("H");
var fivePm = moment().set("hour", 17).format("H");

// Selecting each element to use in start()
var nineEl = $(".nine-am-value");
var tenEl = $(".ten-am-value");
var elevenEl = $(".eleven-am-value");
var twelveEl = $(".twelve-pm-value");
var oneEl = $(".one-pm-value");
var twoEl = $(".two-pm-value");
var threeEl = $(".three-pm-value");
var fourEl = $(".four-pm-value");
var fiveEl = $(".five-pm-value");

// Depending if the hour has passed, is current or in the future will decide itis color
function start(hour, element) {
    if (hour < currentHour) {
        element.css('background-color', 'LightGray');
        // if the hour has passed the current hour than lightgray for the background
    } else if (hour == currentHour) {
        element.css("background-color", "red");
        // if the hour is the same than red for the background
    } else {
        element.css("background-color", "green");
        // anything else being in the future will be green
    }
};

// Each hour and element being passed through the start function to apply background color
start(nineAm, nineEl);
start(tenAm, tenEl);
start(elevenAm, elevenEl);
start(twelvePm, twelveEl);
start(onePm, oneEl);
start(twoPm, twoEl);
start(threePm, threeEl);
start(fourPm, fourEl);
start(fivePm, fiveEl);