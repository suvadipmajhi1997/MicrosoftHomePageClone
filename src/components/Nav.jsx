import React from 'react'
import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid d-flex align-items-center justify-content-between px-lg-7">


        
        <div className="d-flex gap-2">
                      {/* Left Side (Toggler + Search on mobile / Logo on large screen)  */}
          <div className="d-flex align-items-center gap-2">
            {/* Toggler for small screen  */}
            <button
              className="navbar-toggler border-0 d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Search icon for small screen */}
            <button className="btn p-0 d-lg-none" title="Search">
              <i className="bi bi-search fs-5"></i>
            </button>

            {/* Logo (visible on large screen left, centered on mobile) */}
            <a
              className="navbar-brand d-flex align-items-center d-lg-flex"
              href="#"
            >
              <img src={Logo} alt="Microsoft Logo" />
            </a>
          </div>

          {/* Center Nav Links (only visible on large screens) */}
          <div className="d-none d-lg-flex">
            <ul className="navbar-nav flex-row gap-1">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Microsoft 365
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Copilot
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Windows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Surface
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Xbox
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

          {/* Right Icons (All Microsoft + Icons) */}
          <div className="d-flex align-items-center gap-4">
            {/* All Microsoft dropdown (only on large screens) */}
            <div className="d-none d-lg-block dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="allMicrosoftDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                All Microsoft
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </div>

            {/* icons */}
            <a href="#" className="text-dark d-none d-lg-inline">
              <i className="bi bi-search fs-5"></i>
            </a>
            <a href="#" className="text-dark">
              <i className="bi bi-cart3 fs-5"></i>
            </a>
            <a href="#" className="text-dark ">
              <i class="bi bi-person-plus"></i>
            </a>
            
          </div>
        </div>

        {/* Collapsible Menu for mobile */}
  <div class="collapse d-lg-none mt-2" id="navbarContent">
    <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item"><a class="nav-link" href="#">Microsoft 365</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Teams</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Copilot</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Windows</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Surface</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Xbox</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
    </ul>
  </div>
      </nav>
    </div>
  );
}

export default Nav