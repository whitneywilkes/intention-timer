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
    displayTime(this.minutes, this.seconds)
  };

  markComplete() {
    this.completed = true
  };

  saveToStorage() {
    var local = JSON.stringify(pastActivities)
    localStorage.setItem('savedArray', local)
  };
};
