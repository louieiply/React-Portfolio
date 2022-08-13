import React from "react";
import "./css/project.css";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container nav-container">
        <a className="navbar-brand" href="#">
          Louie Ip <i className="fas fa-coffee fa-spin"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#Aboutme" onClick={() => handlePageChange('Aboutme')}>About Me</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#Portfolio" onClick={() => handlePageChange('Portfolio')} >Portfolio</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#" onClick={() => handlePageChange('Contact')}>Contact</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#" onClick={() => handlePageChange('Resume')}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
