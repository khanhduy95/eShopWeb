import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {  }

    async componentDidMount() {
        const url = "/api/CatalogItems";
        const response = await fetch(this.state.localhost+url);
        const data = await response.json();
        // this.setState({products:data});
        console.log("OKKK",data);
    };
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
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                      </li>
                      <li className="nav-item">
                          <Link to="/link">
                          <a className="nav-link" href="#">Link</a>
                          </Link>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled link</a>
                      </li>
                  </ul>
          </nav>


         );
    }
}
 
export default Header;