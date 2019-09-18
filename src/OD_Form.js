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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Origin"
            required
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="text" placeholder="Destination" required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default OD_Form;
