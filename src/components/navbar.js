import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {

  warning(event) {
    this.setState({ section : class{"hero is-warning is-medium" }});
  }


  render() {
    return (
      <section class="hero is-primary is-medium">
        <div class="hero-head" />
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand" />
            <a class="navbar-item" />
            <img src="../Logos/Kean_Brand-2018WEB.png" alt="Kean University" />
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
              <Link to="/" class="navbar-item is-active">
                  Home
                </Link>   
                <Link to="about" class="navbar-item">
                  About
                </Link>    
              </div>
            </div>
          </div>
        </nav>

        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              Kean Routes
                  </h1>
            <h2 class="subtitle">
              Subtitle
                  </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;