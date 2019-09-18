import React, { Component } from "react";

class OD_Form extends Component {
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
      <div class="level-left">
        <div class="container">
          <div class="field">
            <label class="label">Origin</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="1000 Morris Ave, Union, NJ 07083"
              ></input>
            </div>
          </div>

          <div class="field">
            <label class="label">Destination</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="1000 Morris Ave, Union, NJ 07083"
              ></input>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OD_Form;
