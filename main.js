var currentActivity;
var pastActivities = [];

var activityButtons = document.querySelectorAll(".button");
var timerContainer = document.querySelector(".minutes-seconds-container");
var selectActivityButton = document.querySelector(".button-container");
var accomplishInputField = document.querySelector(".accomplish-input");
var minInputField = document.querySelector("#minutesInput");
var secInputField = document.querySelector("#secondsInput");
var startActivityButton = document.querySelector(".start-activity-button");
var studyIcon = document.querySelector("#study-icon");
var meditateIcon = document.querySelector("#meditate-icon");
var exerciseIcon = document.querySelector("#exercise-icon");
var studyButton = document.querySelector("#studyButton");
var meditateButton = document.querySelector("#meditateButton");
var exerciseButton = document.querySelector("#exerciseButton");
var defaultForm = document.querySelector('#defaultForm')
//

startActivityButton.addEventListener("click", startActivity);

selectActivityButton.addEventListener("click", function (event) {
    var button = event.target.id;
    resetButtons();

    if (button === "studyButton") {
        event.target.classList.add("study-active");
        studyIcon.src = "./assets/study-active.svg";
    } else if (button === "meditateButton") {
        event.target.classList.add("meditate-active");
        meditateIcon.src = "./assets/meditate-active.svg";
    } else if (button === "exerciseButton") {
        event.target.classList.add("exercise-active");
        exerciseIcon.src = "./assets/exercise-active.svg";
    }
});

timerContainer.addEventListener("keydown", function (event) {
    var invalidCharacters = ["e", "+", "-"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
});
//if .class === studyButton --- apply active class
//className.includes('active')

function findButton() {
    for (var i = 0; i < activityButtons.length; i++) {
        if (activityButtons[i].className.includes("active")) {
            return activityButtons[i].value;
        }
    }
}
function startActivity() {
    var activityCategory = findButton();
    var activityDescription = accomplishInputField.value;
    var activityMinutes = minInputField.value;
    var activitySeconds = secInputField.value;
    currentActivity = new Activity(activityCategory, activityDescription, activityMinutes, activitySeconds);
    hide(defaultForm);
  }
// new function 
// - change h2 innerText to Current Activity
// - showId to currentActivityForm
// - change h3 element to activityDescription = innerText 
// - create timer from input values / toggle for form 
// - create start button 
// - make start button outline match category


function show(variable) {
  variable.classList.remove("hidden");
};

function hide(variable) {
  variable.classList.add("hidden");
}

function resetButtons() {
    studyButton.classList.remove("study-active");
    studyIcon.src = "./assets/study.svg";
    meditateButton.classList.remove("meditate-active");
    meditateIcon.src = "./assets/meditate.svg";
    exerciseButton.classList.remove("exercise-active");
    exerciseIcon.src = "./assets/exercise.svg";
}

// accomplishInputField.addEventListener('keypress', accomplishInput);
// minSecInputField.addEventListener('keypress', inputTime)

function accomplishInput() {
    alert("this is accomplishment to reach being input");
}

function inputTime() {
    alert("this is time being input");
}

// function startActivity() {
//   alert('this is a start activity button');
// }
{
    /* <input id='numbersOnly' pattern='[0-9]+' type='text'> */
}

// When the Start Activity button is clicked, the user should 
// no longer see the form, and instead see a timer clock. 

// The timer clock should display the user-provided minutes and seconds, as well as the description. 

// The category should not appear, but the outline of the circle 
// should match the color associated with the category.