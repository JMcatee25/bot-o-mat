import React, { Component } from "react";

export default class task extends Component {
  render() {
    return (
      <div>
        {this.props.status && this.props.taskID !== this.props.currentTaskID ? (
          <li className="robotTasks">
            {this.props.description} : {this.props.eta} millisec
          </li>
        ) : (
          <li className="robotTasks">
            {this.props.description} :&nbsp;
            {this.props.status ? (
              <span>{this.props.timeRemaining}</span>
            ) : (
              <span>{this.props.eta}</span>
            )}
            &nbsp;millisec
            {this.props.status ? null : (
              <button
                className="taskButton"
                onClick={() =>
                  this.props.handleCountDown(this.props.eta, this.props.taskID)
                }
              >
                Start Task
              </button>
            )}
          </li>
        )}
      </div>
    );
  }
}
