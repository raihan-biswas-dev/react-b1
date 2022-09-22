import React, { Component } from "react";
import "./App.css";
import Technology from "./components/Technology";

class App extends Component {
  state = {
    technologyDetails: [
      { technologyName: "JavaScript", usedFor: "Web dev" },
      { technologyName: "React JS", usedFor: "Frontend dev" },
      { technologyName: "Node JS", usedFor: "Backend dev" },
    ],
  };

  changeTechnologyState = (newTechName) => {
    this.setState({
      technologyDetails: [
        { technologyName: "MongDB", usedFor: "Firebase" },
        { technologyName: newTechName, usedFor: "Frontend dev" },
        { technologyName: "I am also Change", usedFor: "Change Okay" },
      ],
    });
  };

  changeWithInut = (e) => {
    this.setState({
      technologyDetails: [
        { technologyName: "MongDB", usedFor: "Firebase" },
        { technologyName: e.target.value, usedFor: "Frontend dev" },
        { technologyName: "I am also Change", usedFor: "Change Okay" },
      ],
    });
  };

  render() {
    // let obj = new Component();
    // console.log(obj);
    console.log(this.state);
    return (
      <div className="App">
        <h1>Book list</h1>
        <button
          onClick={() =>
            this.changeTechnologyState("I am change From React JS - Next JS")
          }
        >
          Change State
        </button>

        <input type="text" onChange={this.changeWithInut} />

        <Technology
          technologyName={this.state.technologyDetails[0].technologyName}
          usedFor={this.state.technologyDetails[0].usedFor}
        />
        <Technology
          technologyName={this.state.technologyDetails[1].technologyName}
          usedFor={this.state.technologyDetails[1].usedFor}
        />
        <Technology
          technologyName={this.state.technologyDetails[2].technologyName}
          usedFor={this.state.technologyDetails[2].usedFor}
          change={this.changeTechnologyState.bind(
            this,
            "I am change 2 from also change by new change"
          )}
        />
      </div>
    );
  }
}

export default App;
