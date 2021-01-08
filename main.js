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
var defaultForm = document.querySelector('#defaultForm');
var activityHeader = document.querySelector('#activityType');
var startActivityForm = document.querySelector('#startActivityForm')
var userDescriptionInput = document.querySelector('#userDescriptionInput')
var startButton = document.querySelector('.start-button');
var categoryError = document.querySelector('#categoryError');
var descriptionError = document.querySelector('#descriptionError');
var minutesError = document.querySelector('#minutesError');
var secondsError = document.querySelector('#secondsError');
var errorMessages = document.querySelectorAll('.error-message');
var timer = document.querySelector('#timerInsert');

startActivityButton.addEventListener("click", startActivity);

selectActivityButton.addEventListener("click", function(event) {
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

timerContainer.addEventListener("keydown", function(event) {
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
  return false;
}

function startActivity() {
  if (checkForErrors()) {
    return;
  };
  var activityCategory = findButton();
  var activityDescription = accomplishInputField.value;
  var activityMinutes = minInputField.value;
  var activitySeconds = secInputField.value;
  currentActivity = new Activity(activityCategory, activityDescription, activityMinutes, activitySeconds);
  hide(defaultForm);
  showTimer();
}

// new function
function showTimer() {
  show(startActivityForm);
  timer.innerText = currentActivity.startTimer();
  activityHeader.innerText = 'Current Activity';
  userDescriptionInput.innerText = currentActivity.description;
  // - create timer from input values / toggle for form
  if (currentActivity.category === 'Study') {
    startButton.classList.add('study-active')
  } else if (currentActivity.category === 'Meditate') {
    startButton.classList.add('meditate-active')
  } else if (currentActivity.category === 'Exercise') {
    startButton.classList.add('exercise-active')
  }
}


function checkForErrors() {
  hideErrorMessages();
  var inputs = [accomplishInputField.value, minInputField.value, secInputField.value]
  if (!findButton()) {
    show(categoryError);
    return true;
  }
  for(var i=0; i < inputs.length; i++) {
    if(inputs[i].length === 0) {
      show(errorMessages[i+1])
      return true;
    }
  }
}

function hideErrorMessages() {
  for(var i=0; i < errorMessages.length; i++) {
    hide(errorMessages[i]);
  }
}

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

// function accomplishInput() {
//   alert("this is accomplishment to reach being input");
// }

// function inputTime() {
//   alert("this is time being input");
// }

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
