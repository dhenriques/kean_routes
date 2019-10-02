import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <footer class="footer has-background-light">
        <div class="container">
          <hr />
          <div class="columns">
            <div class="level-left">
              <a class="level-item" href="https://www.kean.edu">
                Kean University
              </a>
            </div>
            <div class="column has-text-centered has-text-right-tablet">
              <p class="subtitle is-6">
                &copy; 2019 Daniel Henriques. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
