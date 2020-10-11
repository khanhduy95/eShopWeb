import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar bg-light">
            <Link to="/">
            <a href="#" className="navbar-brand">eShopWeb</a>
            </Link>
           
                <ul className="nav mr-auto">
                    <li className="nav-item" > 
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          CatalogType
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                      </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/About">
                        <a className="nav-link" href="#">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact">
                         <a className="nav-link " href="#"> Contact </a>
                        </Link>
                    </li>
                </ul>
        </nav>
         );
    }
}
 
export default Header;