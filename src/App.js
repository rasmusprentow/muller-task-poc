import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskAssignment } from "./task-assignment";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"><h1>Tasks</h1></header>
        <TaskAssignment />
      </div>
    );
  }
}

export default App;
