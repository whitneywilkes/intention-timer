# **Intention Timer**
## Group Project

<a href="https://github.com/whitneywilkes/intention-timer/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=whitneywilkes/intention-timer" />
</a>

## Source
This app is modeled after a Turing School of Software & Design project *Insight Timer*
 [@turingschool](https://github.com/turingschool)

[Visit for a live demo](https://whitneywilkes.github.io/intention-timer)
## Table of Contents
* [General Info](#General-Info)
* [Languages](#Languages)
* [Setup](#Setup)

## Features

#### Form Functionality
  - When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon change colors to give a visual indication that it has been selected.

  - An input field is provided for What would you like to accomplish during this time?, minutes and seconds. The minutes and seconds fields only accepts numbers. 

  - A Start Activity button is provided to submit the data entered into the form. When the button is clicked, the data model is updated with an instance of the Activity class.

  - When the Start Activity button is clicked, the user will no longer see the form, and instead see a timer clock. The timer clock will display the user-provided minutes and seconds, as well as the description. The category will not appear, but the outline of the circle will match the color associated with the category.

  - If the Start Activity button is clicked before the user has entered information into all four inputs, the user will receive an error message, but will not lose any information that was provided.
  
#### Minimum Viable Product
  - The user can start the time by clicking Start.

  - While timer is running, the user can see it count down by second.

  - When the timer completes, an alert appears in the browser, letting the user know that the time is up and the activity has been completed.

#### Logging Past Activities
  - When the timer completes, the alert no longer appears. Instead, a motivational or congratulatory message appears on the left side of the page, replacing the timer.

  - When the user acknowledges the message and completion of the activity by clicking Log Activity, a card with the category, time, and the users input for *What would you like to accomplish during this time?* appears on the card. The card also has a small color-coded visual indicator of the category. 

#### Persisting Past Activities
  - When the user refreshes the page their past activities are still displayed!


## Programming Languages
* <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
* <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
* <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
	
## Setup

### *Fork down this repository and run the following in your terminal*
```
$ git clone git@github.com:whitneywilkes/whats-for-dinner.git
``` 
