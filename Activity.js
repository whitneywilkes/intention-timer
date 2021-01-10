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
      timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2 , '0')}`;
    }, 1000)
  }

  markComplete() {
    startButton.innerText = "COMPLETE!";
    removeClass(logButton);
  };

  saveToStorage() {
  };
};
