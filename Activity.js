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
  var seconds = this.seconds % 60;

    setInterval(function() {
  console.log(minutes)
  console.log(seconds)
    if (seconds < 10) {
      seconds = `0${seconds}`;
    };
    seconds--
  }, 1000)
  return `${minutes}:${seconds}`;
}

  markComplete() {
  };

  saveToStorage() {
  };
};

