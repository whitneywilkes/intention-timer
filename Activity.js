class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  };
  startTimer() {
  var minutes = parseInt(this.minutes);
  var seconds = parseInt(this.seconds);
  var stop = this.markComplete;

  var countDownTimer = setInterval(function() {
    startButton.disabled = true
    if (seconds === 0 && minutes === 0) {
      stop()
      clearInterval(countDownTimer)
    } else if (seconds === 0) {
      minutes--
      seconds = 59
    } else {
      seconds--
    }
    fixTime();
  }, 1000);
  };

  markComplete() {
    startButton.innerText = "COMPLETE!";
    removeClass(logButton);
  };

  saveToStorage() {
  };
};
