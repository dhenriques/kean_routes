import React from "react";
import { Link } from "react-router-dom";

const output = () => (
  <div>
    <nav class="navbar is-warning is-bold" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/logos/Kean_Brand-2018-white.png" alt="Kean University"/>
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <Link to="/" class="navbar-item">
            Home
              </Link>
          <Link to="about" class="navbar-item">
            About
              </Link>
        </div>
      </div>
    </nav>

    <div class="hero is-warning" height="100%">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Error 404 - Page not found
                  </h1>
          <h2 class="subtitle">
            Please return to the homepage
                  </h2>
        </div>
      </div>
    </div>
  </div>
);

export default output;
