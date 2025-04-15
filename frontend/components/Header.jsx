import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2C3E50" }}>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Paintball City</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Campos">Campos</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/Register">Registrarse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/Login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
