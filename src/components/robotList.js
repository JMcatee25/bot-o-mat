import React, { Component } from "react";
import Robot from "./robot";

export default class robotList extends Component {
  render() {
    let robotList = this.props.robots.map((robot, index) => {
      return (
        <Robot
          img={robot.img}
          name={robot.name}
          type={robot.type}
          tasks={robot.tasks}
          key={index}
        />
      );
    });
    return <div className="robotlist">{robotList}</div>;
  }
}
