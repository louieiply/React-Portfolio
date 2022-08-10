import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container nav-container">
        <a class="navbar-brand" href="#">
          Louie Ip <i class="fas fa-coffee fa-spin"></i>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"/>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <a class="nav-link" href="#Aboutme" onClick={() => handlePageChange('Aboutme')}>About Me</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#Portfolio" onClick={() => handlePageChange('Portfolio')} >Portfolio</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#" onClick={() => handlePageChange('Contact')}>Contact</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#" onClick={() => handlePageChange('Resume')}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
