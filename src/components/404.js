import React from "react";
import { Link } from "react-router-dom";

const output = () => (
  <section class="hero is-warning is-medium">
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
            <Link to="/" class="navbar-item">
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
          Error 404 - Page not found
                  </h1>
        <h2 class="subtitle">
          Please return to the homepage
                  </h2>
      </div>
    </div>
  </section>
);

export default output;
