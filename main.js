//
var timerContainer = document.querySelector(".minutes-seconds-container")
var selectActivityButton = document.querySelector('.button-container');
var accomplishInputField = document.querySelector('.accomplish-input');
var minInputField = document.querySelector('#minutesInput');
var secInputField = document.querySelector('#secondsInput');
var startActivityButton = document.querySelector('.start-activity-button');
var studyIcon = document.querySelector('#study-icon');
var meditateIcon = document.querySelector('#meditate-icon');
var exerciseIcon = document.querySelector('#exercise-icon');
var studyButton = document.querySelector('#studyButton');
var meditateButton = document.querySelector('#meditateButton');
var exerciseButton = document.querySelector('#exerciseButton');

//



startActivityButton.addEventListener('click', startActivity);

selectActivityButton.addEventListener('click', function(event) {
  var button = event.target.id;
  resetButtons();
  if(button === 'studyButton') {
    event.target.classList.add('study-active')
    studyIcon.src = "./assets/study-active.svg"
  } else if(button === 'meditateButton') {
    event.target.classList.add('meditate-active')
    meditateIcon.src = "./assets/meditate-active.svg"
  } else if(button === 'exerciseButton'){
    event.target.classList.add('exercise-active')
    exerciseIcon.src = "./assets/exercise-active.svg"
  }
});

timerContainer.addEventListener('keydown', function(event) {
  var invalidCharacters = ['e', '+', "-"];
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
});

function startActivity() {
  
}


function resetButtons() {
  studyButton.classList.remove('study-active')
  studyIcon.src = "./assets/study.svg"
  meditateButton.classList.remove('meditate-active')
  meditateIcon.src = "./assets/meditate.svg"
  exerciseButton.classList.remove('exercise-active')
  exerciseIcon.src = "./assets/exercise.svg"
}



// accomplishInputField.addEventListener('keypress', accomplishInput);
// minSecInputField.addEventListener('keypress', inputTime)

function accomplishInput() {
  alert('this is accomplishment to reach being input');
}



function inputTime() {
  alert('this is time being input');
}

// function startActivity() {
//   alert('this is a start activity button');
// }
{/* <input id='numbersOnly' pattern='[0-9]+' type='text'> */}

