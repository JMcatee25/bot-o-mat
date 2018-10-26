import React, { Component } from "react";
import Task from "./task";

export default class robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: "",
      currentTaskID: "",
      status: false,
      myTasks: this.props.tasks
    };
  }

  handleCountDown = (eta, currentID) => {
    var countDown = eta;
    var nextStatus = !this.state.status;

    this.setState({
      currentTaskID: currentID,
      status: nextStatus
    });

    var timer = setInterval(() => {
      countDown--;
      this.setState({
        timeRemaining: countDown
      });

      if (countDown === 0) {
        const removingTasks = this.state.myTasks.filter(
          task => task.taskID !== this.state.currentTaskID
        );
        var nextStatus = !this.state.status;
        this.setState({
          status: nextStatus,
          myTasks: removingTasks
        });
        clearInterval(timer);
      }
    }, 1);
  };

  render() {
    const taskList = this.state.myTasks.map((task, index) => {
      return (
        <Task
          handleCountDown={this.handleCountDown}
          description={task.description}
          eta={task.eta}
          key={index}
          currentTaskID={this.state.currentTaskID}
          taskID={task.taskID}
          timeRemaining={this.state.timeRemaining}
          status={this.state.status}
        />
      );
    });
    return (
      <div className="robot">
        <div className="robotinfo__container">
          <p className="robotinfo">Name: {this.props.name}</p>
          <p className="robotinfo">Type: {this.props.type}</p>
          <p className="robotinfo">
            Status: {this.state.status ? "Busy" : "Chillin"}
          </p>
          <img src={require(`./../png/robot-${this.props.img}.png`)} alt="" />
        </div>
        <h2 className="align">Tasks and completion time:</h2>
        <ul>{taskList}</ul>
      </div>
    );
  }
}
