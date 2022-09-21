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

  render() {
    // let obj = new Component();
    // console.log(obj);

    return (
      <div className="App">
        <h1>Book list</h1>
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
        />
      </div>
    );
  }
}

export default App;
