var currentActivity;
var pastActivities = [];

var activityButtons = document.querySelectorAll(".button");
var timerContainer = document.querySelector(".minutes-seconds-container");
var selectActivityButton = document.querySelector(".button-container");
var accomplishInputField = document.querySelector(".accomplish-input");
var minInputField = document.querySelector("#minutesInput");
var secInputField = document.querySelector("#secondsInput");
var startActivityButton = document.querySelector(".start-activity-button");
var defaultForm = document.querySelector('#defaultForm');
var activityHeader = document.querySelector('#activityType');
var startActivityForm = document.querySelector('#startActivityForm');
var userDescriptionInput = document.querySelector('#userDescriptionInput');
var startButton = document.querySelector('.start-button');
var categoryError = document.querySelector('#categoryError');
var errorMessages = document.querySelectorAll('.error-message');
var timer = document.querySelector('#timerInsert');
var logButton = document.querySelector('.log-button');
var cardContainer = document.querySelector('.card-container');
var defaultMessage = document.querySelector('.no-activities');
var startNewActivityForm = document.querySelector('.start-new-activity')
var createNewActivityButton = document.querySelector('.create-new-activity-button')
var userInputs = document.querySelectorAll('input')

window.addEventListener('load', displayLocalStorage);
logButton.addEventListener("click", displayCard);
startActivityButton.addEventListener("click", startActivity);
createNewActivityButton.addEventListener("click", window.location.reload);

startButton.addEventListener("click", function() {
  currentActivity.startTimer();
});

selectActivityButton.addEventListener("click", function(event) {
  var button = event.target.closest('button');
  resetButtons();
  button.disabled = true;
  button.firstElementChild.src = `./assets/${button.value.toLowerCase()}-active.svg`;
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
    };
  };
  removeClass(categoryError);
  return false;
};

function startActivity() {
  if (!findButton() || checkForErrors()) {
    return;
  };
  currentActivity = new Activity(findButton(), accomplishInputField.value, minInputField.value, secInputField.value);
  addClass(defaultForm);
  showTimer();
};

function showTimer() {
  removeClass(startActivityForm);
  timer.innerText = `${currentActivity.minutes.padStart(2, '0')}:${currentActivity.seconds.padStart(2, '0')}`;
  activityHeader.innerText = 'Current Activity';
  userDescriptionInput.innerText = currentActivity.description;
  addClass(startButton, `${currentActivity.category.toLowerCase()}`);
};

function checkForErrors() {
  hideErrorMessages();
  var inputs = [accomplishInputField.value, minInputField.value, secInputField.value];
  if (inputs[2] >= 60 || parseInt(inputs[1]) === 0 && parseInt(inputs[2]) === 0) {
    removeClass(errorMessages[2])
    addClass(userInputs[2], "error-line");
    return true;
  }
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].length === 0) {
      removeClass(errorMessages[i]);
      addClass(userInputs[i], "error-line");
      return true;
    }
  }
}

function hideErrorMessages() {
  for (var i = 0; i < errorMessages.length; i++) {
    addClass(errorMessages[i]);
    removeClass(userInputs[i], "error-line");
  }
  addClass(categoryError)
}

function removeClass(element, className) {
  element.classList.remove(className || "hidden");
};

function addClass(element, className) {
  element.classList.add(className || "hidden");
}

function resetButtons() {
  for (var i = 0; i < activityButtons.length; i++) {
    activityButtons[i].disabled = false;
    activityButtons[i].firstElementChild.src = activityButtons[i].firstElementChild.src.replace('-active', "")
  };
}

function displayCard() {
  addClass(defaultMessage);
  removeClass(startNewActivityForm)
  addClass(startActivityForm)
  currentActivity.completed = true;
  pastActivities.unshift(currentActivity)
  currentActivity.saveToStorage();
  loadCard()
};

function loadCard() {
  cardContainer.innerHTML = ""
  for (var i = 0; i < pastActivities.length; i++) {
    cardContainer.innerHTML +=
      `<article>
      <div class="card-section">
        <p class="card-title">${pastActivities[i].category}</p>
        <p class="card-time">${pastActivities[i].minutes} MIN ${pastActivities[i].seconds} SECONDS</p>
        <p class="card-description">${pastActivities[i].description}</p>
      </div>
      <div class="card-section">
      <button class="card-category-indicator ${pastActivities[i].category.toLowerCase()}"></button>
      </div>
    </article>`
  };
};

function windowLoad() {
  var page = localStorage.getItem('savedArray');
  var info = JSON.parse(page);
  pastActivities = info;
  loadCard();
};

function displayLocalStorage() {
  if (localStorage.length === 0) {
    removeClass(defaultMessage);
    return;
  }
    windowLoad();
};
