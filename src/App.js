import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello App</h1>
      <Designation />
    </div>
  );
}

class Designation extends Component() {
  render() {
    return (
      <div>
        <h1>My Designation</h1>
      </div>
    );
  }
}

export default App;
