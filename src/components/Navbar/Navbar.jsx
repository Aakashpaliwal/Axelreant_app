import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h4>
              COMPANY<span style={{ color: "#ee3b00" }}>LOGO</span>
            </h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  About
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Solution
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <button className="btn navbar_btn">
                  <i class="fa fa-twitch" aria-hidden="true"></i>&nbsp;Get In
                  Touch
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
