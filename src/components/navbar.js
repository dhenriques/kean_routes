import React, { Component } from "react";
import { Link } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});


class Navbar extends Component {
  render() {
    return (
    <div>
     <section class="hero is-link is-bold">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ">
          <a class="navbar-item" href="/">
            <img src="/logos/Kean_Brand-2018-white.png" alt="Kean University" />
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

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Kean Routes</h1>
          <h2 class="subtitle">Find the best route accross multiple map applications</h2>
        </div>
      </div>
    </section>
</div>
    );
  }
}
export default Navbar;