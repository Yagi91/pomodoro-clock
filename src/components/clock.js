import React from "react";
import beep from "../media/beep.wav";
import "../styles/calc.css";

//challenging part was to create an accurate timer to execute at exact 1 second
//I used a Dynamic timer timer that changes the time from 1second to about 0.92-0.96 millisecond dynamically based on the time it took to execute the function so as to better display the next time;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mins: 25,
      secs: 0,
      breakLength: 5,
      sessionLength: 25,
      countdown: false,
      session: "Session",
      count: 25,
    };
    this.handleCount = this.handleCount.bind(this);
    this.reset = this.reset.bind(this);
    this.playRef = React.createRef();
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.manageStroke = this.manageStroke.bind(this);
  }
  handleCount() {
    let timer = 1000; //timer initialized to 1000ms=1000s;
    let endTime; //timestamp at the end of the code
    let usedTime; //time used to run the code
    this.setState((state) => ({
      countdown: !state.countdown,
      count: !state.count ? state.mins : state.count,
    }));
    let myInterval = setInterval(() => {
      timer = 1000; //timer reset to give so as not to deviate and keep reducing the milliseconds but make 1000 the standard
      let startTime = Date.now(); //records timestamp of code execution
      if (this.state.countdown) {
        if (this.state.secs > 0) {
          this.setState((state) => ({ secs: state.secs - 1 }));
        } else if (this.state.secs === 0) {
          if (this.state.mins === 0) {
            this.playRef.current.currentTime = 0;
            this.playRef.current.play();
            if (this.state.session === "Session") {
              this.setState((state) => ({
                session: "Break",
                mins: state.breakLength,
                secs: 0,
                count: state.breakLength,
              }));
            } else if (this.state.session === "Break") {
              this.setState((state) => ({
                session: "Session",
                mins: state.sessionLength,
                secs: 0,
                count: state.sessionLength,
              }));
            }
          } else {
            this.setState((state) => ({ mins: state.mins - 1, secs: 59 }));
          }
        }
        endTime = Date.now(); //time stamp code completed execution
        usedTime = endTime - startTime; //time ued for code to execute
        timer -= usedTime; // time to use for the next operation which is a few milliseconds less to make it more accurate
        //console.log(endTime, startTime, usedTime, startTime > endTime, timer);
        //expected output: both start and endTime appear in milliseconds, endTime is larger than startTime , used time is a very mostly less than 10, false, timer<1000;
      } else {
        clearInterval(myInterval);
      }
    }, timer);
  }
  reset() {
    document.getElementById("beep").currentTime = 0;
    this.playRef.current.pause();
    this.playRef.current.currentTime = 0;
    clearInterval(this.handleCount);
    this.setState((state) => ({
      countdown: false,
      mins: 25,
      secs: 0,
      session: "Session",
      breakLength: 5,
      sessionLength: 25,
      count: "25",
    }));
  }
  decrement(e) {
    if (!this.state.countdown) {
      if (e.currentTarget.id === "break-decrement") {
        if (this.state.breakLength > 1 && this.state.breakLength <= 60) {
          this.setState((state) => ({
            breakLength: state.breakLength - 1,
            mins:
              state.session === "Break" ? state.breakLength - 1 : state.mins,
            secs: state.session === "Break" ? 0 : state.secs,
            count:
              state.session === "Break" ? state.breakLength - 1 : state.count,
          }));
        }
      } else {
        if (this.state.sessionLength > 1 && this.state.sessionLength <= 60) {
          this.setState((state) => ({
            sessionLength: state.sessionLength - 1,
            mins:
              state.session === "Session"
                ? state.sessionLength - 1
                : state.mins,
            secs: state.session === "Session" ? 0 : state.secs,
            count:
              state.session === "Session"
                ? state.sessionLength - 1
                : state.count,
          }));
        }
      }
    }
  }
  increment(e) {
    if (!this.state.countdown) {
      if (e.currentTarget.id === "break-increment") {
        if (this.state.breakLength >= 1 && this.state.breakLength < 60) {
          this.setState((state) => ({
            breakLength: state.breakLength + 1,
            mins:
              state.session === "Break" ? state.breakLength + 1 : state.mins,
            secs: state.session === "Break" ? 0 : state.secs,
            count:
              state.session === "Break" ? state.breakLength + 1 : state.count,
          }));
        }
      } else {
        if (this.state.sessionLength >= 1 && this.state.sessionLength < 60) {
          this.setState((state) => ({
            sessionLength: state.sessionLength + 1,
            mins:
              state.session === "Session"
                ? state.sessionLength + 1
                : state.mins,
            secs: state.session === "Session" ? 0 : state.secs,
            count:
              state.session === "Session"
                ? state.sessionLength + 1
                : state.count,
          }));
        }
      }
    }
  }
  manageStroke() {
    let offset =
      794.83 -
      ((this.state.mins * 60 + this.state.secs) / (this.state.count * 60)) *
        794.83;
    return offset;
  }
  render() {
    const style = {
      circle: {
        strokeDasharray: "794.83",
        strokeDashoffset: this.manageStroke(),
        transition: `all linear ${this.state.countdown ? "1s" : "0.3s"}`,
      },
    };
    return (
      <div className="clock">
        <audio src={beep} id="beep" ref={this.playRef} />
        <h3 className="header">POMODORO CLOCK</h3>
        <Break
          className="break"
          decrement={this.decrement}
          breakLength={this.state.breakLength}
          increment={this.increment}
        />
        <Session
          className="session"
          decrement={this.decrement}
          sessionLength={this.state.sessionLength}
          increment={this.increment}
        />
        <section className="main">
          <svg className="progress-ring" height="100%" width="100%">
            <g>
              <ellipse
                style={style.circle}
                className="progress-ring_circle"
                ry="126"
                rx="127"
                cx="50%"
                cy="53%"
              />
            </g>
          </svg>
          <p id="timer-label">{this.state.session}</p>
          <div id="time-left">
            {this.state.mins < 10 ? `0${this.state.mins}` : this.state.mins}:
            {this.state.secs < 10 ? `0${this.state.secs}` : this.state.secs}
          </div>
        </section>
        <StartStop
          countdown={this.state.countdown}
          count={this.handleCount}
          reset={this.reset}
          className="startStop"
        />
      </div>
    );
  }
}

function Break(props) {
  return (
    <div className="break">
      <div id="break-label">Break length</div>
      <div className="break-buttons">
        <button id="break-increment" onClick={props.increment}>
          <i className="fa fa-arrow-up fa-2x" />
        </button>
        <p id="break-length">{props.breakLength}</p>
        <button id="break-decrement" onClick={(e) => props.decrement(e)}>
          <i className="fa fa-arrow-down fa-2x" />
        </button>
      </div>
    </div>
  );
}

function Session(props) {
  return (
    <div className="session">
      <div id="session-label">Session length</div>
      <div className="session-buttons">
        <button id="session-increment" onClick={props.increment}>
          <i className="fa fa-arrow-up fa-2x" />
        </button>
        <p id="session-length">{props.sessionLength}</p>
        <button id="session-decrement" onClick={props.decrement}>
          <i className="fa fa-arrow-down fa-2x" />
        </button>
      </div>
    </div>
  );
}

function StartStop(props) {
  return (
    <div className="startStop">
      {props.countdown ? (
        <button id="start_stop" onClick={props.count}>
          <i class="fa fa-pause fa-3x"></i>
        </button>
      ) : (
        <button id="start_stop" onClick={props.count}>
          <i class="fa fa-play fa-3x"></i>
        </button>
      )}
      <button id="reset" onClick={props.reset}>
        <i class="fa fa-refresh fa-3x" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Clock;
