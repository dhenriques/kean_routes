import './App.sass'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import OD_Form from "./OD_Form";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <div>
    <App />
    <OD_Form />
  </div>,
  document.getElementById("root")
);
