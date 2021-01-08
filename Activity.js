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
  
    setInterval(function() {
  console.log(minutes)
  console.log(seconds)
    seconds--
    timer.innerText = `${minutes}:${seconds}`;
  }, 1000)
}

  markComplete() {
  };

  saveToStorage() {
  };
};