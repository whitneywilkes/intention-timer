//
var selectActivityButton = document.querySelector('.button-container');
var accomplishInputField = document.querySelector('.accomplish-input');
var minInputField = document.querySelector('#minutesInput');
var secInputField = document.querySelector('#secondsInput');
var startActivityButton = document.querySelector('.start-activity-button');
var studyIcon = document.querySelector('#study-icon');
var meditateIcon = document.querySelector('#meditate-icon');
var exerciseIcon = document.querySelector('#exercise-icon');
var studyButton = document.querySelector('#study-button');
var meditateButton = document.querySelector('#meditate-button');
var exerciseButton = document.querySelector('#exercise-button');


// selectActivityButton.addEventListener('mouseover', selectActivity);
// accomplishInputField.addEventListener('keypress', accomplishInput);
// minSecInputField.addEventListener('keypress', inputTime)
// startActivityButton.addEventListener('click', startActivity);

// studyButton.addEventListener('click', selectActivity);
// meditateButton.addEventListener('click', selectActivity);
// exerciseButton.addEventListener('click', selectActivity);


function selectActivity(event) {
  //on click:
  event.currentTarget.classList.add('study-active')
  // if(event.target === studyButton){
  // studyButton.classList.add('study-active')//update border and text color
  //update icon to active version
  // }
}


function accomplishInput() {
  alert('this is accomplishment to reach being input');
}



function inputTime() {
  alert('this is time being input');
}

function startActivity() {
  alert('this is a start activity button');
}
