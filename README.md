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

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
