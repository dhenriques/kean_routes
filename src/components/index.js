import React, { Component } from "react";
import "react-bulma-components/full";
import Footer from "./footer.js";
import Navbar from "./navbar.js";

class ODForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="section has-background-white">
        <div class="container">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Origin</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="1000 Morris Ave, Union, NJ 07083"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Destination</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="1000 Morris Ave, Union, NJ 07083"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-info">Submit</button>
              </div>
              <div class="control">
                <button class="button is-cancel">Clear</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const output = () => (
  <div>
    <Navbar />
    <ODForm />
    <Footer />
  </div>
);

export default output;
