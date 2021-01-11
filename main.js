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
var startActivityForm = document.querySelector('#startActivityForm');
var userDescriptionInput = document.querySelector('#userDescriptionInput');
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
var startNewActivityForm = document.querySelector('.start-new-activity')
var createNewActivityButton = document.querySelector('.create-new-activity-button')
var userInputs = document.querySelectorAll('input')

// window.addEventListener("load", windowLoad);

window.addEventListener('load', function () {
  if(localStorage.length === 0) {
    return
  } else {
    windowLoad()
    addClass(defaultMessage)
  }
})

logButton.addEventListener("click", displayCard);
startActivityButton.addEventListener("click", startActivity);
createNewActivityButton.addEventListener("click", function(event){
  event.preventDefault();
  createNewActivity();
});


startButton.addEventListener("click", function() {
  currentActivity.startTimer();
});

selectActivityButton.addEventListener("click", function(event) {
  var button = event.target.closest('button');
  resetButtons();
  button.disabled = true ;
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
    removeClass(errorMessages[2]);
    return true;
  }
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].length === 0) {
      removeClass(errorMessages[i]);
      return true;
    }
  } 
}

function hideErrorMessages() {
  for (var i = 0; i < errorMessages.length; i++) {
    addClass(errorMessages[i]);
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
  for(var i = 0; i < activityButtons.length; i++) {
    activityButtons[i].disabled = false ;
    activityButtons[i].firstElementChild.src = activityButtons[i].firstElementChild.src.replace('-active', "")
  };
}

function displayCard() {
  addClass(defaultMessage);
  var color = currentActivity.category.toLowerCase()
  removeClass(startNewActivityForm)
  addClass(startActivityForm)
  pastActivities.push(currentActivity)
  saveInfo()
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
};

function createNewActivity() {
  addClass(logButton)
  addClass(startNewActivityForm)
  removeClass(defaultForm)
  resetButtons()
  startButton.disabled = false
  startButton.innerText = "START"
  for (var i = 0; i < userInputs.length; i++){
    userInputs[i].value = ""
  };
};

// function saveActivities() {
//   localStorage.setItem("pastActivities", JSON.stringify(pastActivities));
// };

// function onLoadDisplay() {
//     pastActivities = JSON.parse(localStorage.getItem("pastActivities"));
//     displayCard();
// };

//When the user refreshes the page,
// Their past activities are still displayed!
// Hint: localStorage could come in handy here…

// -- needs:

// - on window load - json.parse back to past activities to re-pop
// - refactor displayCard function on window load?
// -- could call in a loop to fire for each item

// JSON.stringify(pastActivities)
// localStorage.setItem("pastActivities", JSON.stringify(pastActivities))
// pastActivities = localStorage.getItem(JSON.parse('pastActivities'))


function saveInfo() {
  var local = JSON.stringify(pastActivities)
  localStorage.setItem('savedArray', local)
}
function windowLoad() {
  var page = localStorage.getItem('savedArray')
  var info = JSON.parse(page)
  pastActivities = info
  // console.log(pastActivities)
  // if (pastActivities.length === 0) {
  //   return
  // } else {
    loadCard(pastActivities)
  // }
}
function loadCard(thing) {
  for(var i = 0; i < thing.length; i++) {
  var color = thing[i].category.toLowerCase()
  cardContainer.innerHTML +=
  `<article>
      <div class="card-section">
        <p class="card-title">${thing[i].category}</p>
        <p class="card-time">${thing[i].minutes} MIN ${thing[i].seconds} SECONDS</p>
        <p class="card-description">${thing[i].description}</p>
      </div>
      <div class="card-section">
      <button class="card-category-indicator ${color}"type="button" name="button"></button>
      </div>
    </article>`
  }
}