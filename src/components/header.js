import React, { Component } from "react";


class Header extends Component {
  render() {
    return (
      <html lang="en">
        <section class="hero is-light">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-spaced">Kean Routes</h1>
              <h2 class="subtitle">
                Compare all of your route options accross five map applications.
            </h2>
              {/* <Router>
              <div class="buttons is-centered is-grouped">
                <Link to="" class="control button is-primary">
                  Sign up coming soon
                </Link>
                <Link to="/about" class="control button is-light">
                  Find out more
                </Link>
              </div>
            </Router> */}
            </div>
          </div>
        </section>
      </html>
    );
  }
}

export default Header;