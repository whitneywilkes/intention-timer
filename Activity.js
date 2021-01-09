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
    startButton.innerText = "COMPLETE!";
    removeClass(logButton);
  };

  saveToStorage() {
  };
};

//startButton.innerText = "COMPLETE!";

// - motivational message (all w/ markComplete()):
// - replace markComplete() with the timer HTML line 42
// -- need a hidden activity button to display in markComplete()**
// -- need to add log activity button**
//    --- create static in html but hidden from start

// Instead, a motivational or congratulatory message appears on the left side of the page, replacing the timer.
//text-transform: uppercase (this is a thing, that we can use... not here.. good to know)
