import React from "react";

function Topbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Aswin
              </span>
              <img
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
