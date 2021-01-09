class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.completed = false;
    this.id = Date.now();
  };
  startTimer() {
  var minutes = this.minutes;
  var seconds = this.seconds;
  
    var countDownTimer = setInterval(function() {
      if (seconds === 0 && minutes === 0) {
        clearInterval(countDownTimer)
      } else if (seconds === 0) {
        minutes--
        seconds = 59
      } else if (seconds !== 0) {
        seconds--
      }
      fixTime(minutes, seconds)
      // if (seconds < 10) {
      // timer.innerText = `${minutes}:0${seconds}`
      // } else {
      //   timer.innerText = `${minutes}:${seconds}`;
      // }
    }, 1000)
}

// if(sec and min = 0)
// set everything to zero/show finished message/return
// if(sec=0)
// -1 from min
// sec equal 60
// if(sec not equal to 0)
// -1 from sec
  markComplete() {
  };

  saveToStorage() {
  };
};