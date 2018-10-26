import React, { Component } from "react";
import RobotCreation from "./components/robotCreation";
import RobotList from "./components/robotList";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      robotName: "",
      robotType: "Unipedal",
      img: "",
      tasks: [
        {
          description: "do the dishes",
          eta: 1000,
          taskID: 1
        },
        {
          description: "sweep the house",
          eta: 3000,
          taskID: 2
        },
        {
          description: "do the laundry",
          eta: 10000,
          taskID: 3
        },
        {
          description: "take out the recycling",
          eta: 4000,
          taskID: 4
        },
        {
          description: "make a sammich",
          eta: 7000,
          taskID: 5
        },
        {
          description: "mow the lawn",
          eta: 20000,
          taskID: 6
        },
        {
          description: "rake the leaves",
          eta: 18000,
          taskID: 7
        },
        {
          description: "give the dog a bath",
          eta: 14500,
          taskID: 8
        },
        {
          description: "bake some cookies",
          eta: 8000,
          taskID: 9
        },
        {
          description: "wash the car",
          eta: 20000,
          taskID: 10
        }
      ]
    };
  }

  handleRobotInfoCollection = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRobotCreation = () => {
    let tasksCopy = this.state.tasks;
    let randomTasks = tasksCopy.sort(() => 0.5 - Math.random()).slice(0, 5);
    var randomImg = Math.floor(Math.random() * 20 + 1);
    let newRobot = {
      name: this.state.robotName,
      type: this.state.robotType,
      tasks: randomTasks,
      img: randomImg
    };
    this.setState({
      robots: [...this.state.robots, newRobot]
    });
  };

  handleTimeConvert = millis => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  render() {
    return (
      <div>
        <h1 className="title">BOT - O - MATIC </h1>
        <div className="App">
          <RobotCreation
            handleRobotCreation={this.handleRobotCreation}
            handleRobotInfoCollection={this.handleRobotInfoCollection}
          />
        </div>
        <RobotList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
