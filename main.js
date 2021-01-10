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
  var button = event.target.closest('button');
  console.log(button)
  resetButtons();
  button.disabled = true 
  button.firstElementChild.src = `./assets/${button.value.toLowerCase()}-active.svg`
});


timerContainer.addEventListener("keydown", function(event) {
  var invalidCharacters = ["e", "+", "-"];
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
});

function findButton() {
  for (var i = 0; i < activityButtons.length; i++) {
    if (activityButtons[i].disabled) {
      return activityButtons[i].value;
    }
  }
  return false;
}

function startActivity() {
  if (checkForErrors()) {
    return;
  };
  currentActivity = new Activity(findButton(), accomplishInputField.value, minInputField.value, secInputField.value);
  addClass(defaultForm);
  showTimer();
}


function showTimer() {
  removeClass(startActivityForm);
  fixTime(currentActivity.minutes, currentActivity.seconds)
  activityHeader.innerText = 'Current Activity';
  userDescriptionInput.innerText = currentActivity.description;
  addClass(startButton, `${currentActivity.category.toLowerCase()}`)
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
  for(var i = 0; i < activityButtons.length; i++) {
    activityButtons[i].disabled = false 
  }
  studyIcon.src = "./assets/study.svg";
  meditateIcon.src = "./assets/meditate.svg";
  exerciseIcon.src = "./assets/exercise.svg";
}

function displayCard() {
  addClass(defaultMessage);
  var color = currentActivity.category.toLowerCase()
  logButton.disabled = true;
  cardContainer.innerHTML += 
   `<article>
      <div class="card-section">
        <p class="card-title">${currentActivity.category}</p>
        <p class="card-time">${currentActivity.minutes} MIN ${currentActivity.seconds} SECONDS</p>
         <p class="card-description">${currentActivity.description}</p>
      </div>
      <div class="card-section">
      <button class="card-category-indicator ${color}"type="button" name="button"></button>
      </div>
    </article>`
}

