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
var logButton = document.querySelector('.log-button');
var cardContainer = document.querySelector('.card-container');
var defaultMessage = document.querySelector('.no-activities');

logButton.addEventListener("click", displayCard);

startActivityButton.addEventListener("click", startActivity);

startButton.addEventListener("click", function() {
  currentActivity.startTimer();
});

selectActivityButton.addEventListener("click", function(event) {
  var button = event.target;
  resetButtons();

  if (button.id === "studyButton") {
    addClass(button, "study-active");
    studyIcon.src = "./assets/study-active.svg";
  } else if (button.id === "meditateButton") {
    addClass(button, "meditate-active");
    meditateIcon.src = "./assets/meditate-active.svg";
  } else if (button.id === "exerciseButton") {
    addClass(button, "exercise-active");
    exerciseIcon.src = "./assets/exercise-active.svg";
  }
});

timerContainer.addEventListener("keydown", function(event) {
  var invalidCharacters = ["e", "+", "-"];
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
});

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
  addClass(defaultForm);
  showTimer();
}

// new function
function showTimer() {
  removeClass(startActivityForm);
  fixTime(currentActivity.minutes, currentActivity.seconds)
  activityHeader.innerText = 'Current Activity';
  userDescriptionInput.innerText = currentActivity.description;
  if (currentActivity.category === 'Study') {
    startButton.classList.add('study-active')
  } else if (currentActivity.category === 'Meditate') {
    startButton.classList.add('meditate-active')
  } else if (currentActivity.category === 'Exercise') {
    startButton.classList.add('exercise-active')
  }
}

function fixTime(minutes, seconds) {
  if (minutes < 10 && seconds < 10) {
    timer.innerText = `0${minutes}:0${seconds}`
  } else if (minutes < 10) {
    timer.innerText = `0${minutes}:${seconds}`
  } else if (seconds < 10) {
    timer.innerText = `${minutes}:0${seconds}`
  } else {
    timer.innerText = `${minutes}:${seconds}`;
  }
}

function checkForErrors() {
  hideErrorMessages();
  var inputs = [accomplishInputField.value, minInputField.value, secInputField.value]
  if (!findButton()) {
    removeClass(categoryError);
    return true;
  } else if (inputs[2] >= 60 || parseInt(inputs[1]) === 0 && parseInt(inputs[2]) === 0) {
    removeClass(errorMessages[3])
    return true
  }
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].length === 0) {
      removeClass(errorMessages[i + 1])
      return true;
    }
  }
}

function hideErrorMessages() {
  for (var i = 0; i < errorMessages.length; i++) {
    addClass(errorMessages[i]);
  }
}

function removeClass(element, className) {
  element.classList.remove(className || "hidden");
};

function addClass(element, className) {
  element.classList.add(className || "hidden");
}

function resetButtons() {
  removeClass(studyButton, "study-active");
  studyIcon.src = "./assets/study.svg";
  removeClass(meditateButton, "meditate-active");
  meditateIcon.src = "./assets/meditate.svg";
  removeClass(exerciseButton, "exercise-active");
  exerciseIcon.src = "./assets/exercise.svg";
}

function displayCard() {
  addClass(defaultMessage);

cardContainer.innerHTML += `<article>
 <p class="card-title">${currentActivity.category}</p>
 <p>${currentActivity.minutes} MIN ${currentActivity.seconds} SECONDS</p>
 <p class="card-description">${currentActivity.description}</p>
 </article>`
}
