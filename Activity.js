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
  var stop = this.markComplete;

    var countDownTimer = setInterval(function() {
      if (seconds === 0 && minutes === 0) {
        stop()
        clearInterval(countDownTimer)
      } else if (seconds === 0) {
        minutes--
        seconds = 59
      } else if (seconds !== 0) {
        seconds--
      }
      fixTime(minutes, seconds)
    }, 1000)
  }
  
  markComplete() {
    alert("The time is up and the activity has been completed.");
  };

  saveToStorage() {
  };
};
