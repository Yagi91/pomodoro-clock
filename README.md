   # POMODORO Clock or The 25+5 clock

*TABLE OF CONTENT*
- [Description of Project](#description).
- [LINK to app](https://yagi91.github.io/pomodoro-clock/).
- [Tools Used and why I choose them.](#tools).
- [User Stories and functionality of the clock](#users-story-completed-and-added-functionality-of-the-clock).
- [Problems Encountered](#problems-faced).
- [Credit](#credits).
- How to run the React.js App on your local machine.

### Description
This app is countdown timer that can be used to work efficiently, with each session lasting 25 minutes by default and a break of 5 minutes by default, a the break and the working session alerts the user with a simple beep sound at the end.

### TOOLS:
- React.js; as it fast to render and easily manage the various states in the app like when the clock is in a *counting* down or *paused*, a *session* or a *break*, and a combination of them.
- Sass; more efficient, enables you to use things like variables,
    nested rules, inline imports and more
- HTML5/CSS6;

## USERS STORY COMPLETED and ADDED FUNCTIONALITY OF THE CLOCK
- User is Able to set *break length* by incrementing or decrementing it.
-Use can see a ring reducing it length i proportion to the countdown minutes left.
- User is able to set *session length* by incrementing or decrementing it.
- User User can not set The *session* or *break* above 60 mins or below 1 mins
- User can start and stop the clock by clicking on the play/pause icon.
- The Time is displayed in `mm:ss`.
- User can continue the countdown from where there paused it after clicking the play icon.
- User can get a beep *audio* at the end of each session.
- User can set the app back to it's default state on clicking the reset button.
- *User can message the person who created the app using my twitter on my github profile description*

### PROBLEMS FACED
In doing so I could say my greatest challenges was to create an accurate timer that is to make the count change after 1second be accurate since the `setInterval()` method can not be trusted.
    
Adding a ring that reduces it's length or circumference as times passes rationally depending on the minutes left. Tho this feature is still faulty after making the first count something I wish to fix when next I am updating the app.

#### CREDITS
This clock was created after completing my Front end libraries course on [FREE CODE CAMP](https://www.freecodecamp.org/).
