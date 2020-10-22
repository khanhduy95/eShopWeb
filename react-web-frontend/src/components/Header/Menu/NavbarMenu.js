import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavbarMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      types: [],
    };
  }

  render() {
    return (
      <nav className="navbar bg-light">
        <Link className="nav-link" to="/">
          eShopWeb
        </Link>
        <ul className="nav mr-auto">
          <li className="nav-item">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Dropdown button
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="sss">
                  Action
                </a>
                <a className="dropdown-item" href="sss">
                  Another action
                </a>
                <a className="dropdown-item" href="ddd">
                  Something else here
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarMenu;