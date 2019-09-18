import "react-bulma-components/full";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import OD_Form from "./OD_Form";

class App extends Component {
  render() {
    return (
      <div class="level" className="App">
        <div class="container">
          <div class="content">
            <h1 class="title">Hello, React!</h1>
          </div>
        </div>
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
