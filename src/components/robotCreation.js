import React, { Component } from "react";

export default class robotCreation extends Component {
  render() {
    const robotTypes = [
      { type: "Unipedal" },
      { type: "Bipedal" },
      { type: "Quadrupedal" },
      { type: "Arachnid" },
      { type: "Radial" },
      { type: "Aeronautical" }
    ];

    let robotTypeList = robotTypes.map(type => {
      return <option value={type.type}>{type.type}</option>;
    });

    return (
      <div>
        <label htmlFor="robotName">
          Please name your robot and select robot type:
          <input
            type="text"
            name="robotName"
            onChange={this.props.handleRobotInfoCollection}
            required
          />
        </label>
        <select
          name="robotType"
          ref="typeSelector"
          onChange={this.props.handleRobotInfoCollection}
        >
          {robotTypeList}
        </select>
        <button onClick={this.props.handleRobotCreation} type="button">
          Submit
        </button>
      </div>
    );
  }
}
