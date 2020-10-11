import React, { Component } from 'react';
import {Link, NavLink, Switch} from 'react-router-dom';
import Configuration from '../Configuration';
import ProductByCatalogType from './ProductByCatalogType';

function test(id){
    return(
        <div>
            {console.log("asdasd")}
        </div>
    );
}

class Header extends Component {
    constructor(props){
        super();
        this.CONFIG=new Configuration();
        this.state = {  
            id:null,
            catalogType:[],
            ProductByType:[]
        }
    }
    
    async componentDidMount() {
        const url = "/api​/CatalogType";
        const response = await fetch(this.CONFIG.CATALOG_TYPE);
        const data = await response.json();
        this.setState({catalogType:data});
    };
    onhandle = () =>{
        alert("OKK");
        // return (
        // <div>
        //     <Link to={`/product/${id}`}>
        //     </Link>
        // </div>
        // )
    }
    
    render() { 
      
       

        let dropMenu= this.state.catalogType.map((data,key)=>{
            return    <Link className="dropdown-item" 
                        to={`/product/${data.catalogId}`}
                         >
                         {data.catalogName}
                 </Link>
            
            
            // <Link key={key} className="dropdown-item" 
            //          onClick={this.try(data.catalogId)} 
            //         // to={`/product/${data.catalogId}`}
            //         >
            //                 {data.catalogName}
            //         </Link>
            
            
            // <li className="dropdown-item" key={key} onClick={this.try(data.catalogId)}>
            //         {/* {data.catalogName} */}
            //         <Link  to={`/product/${data.catalogId}`}>{data.catalogName}</Link>
            //     </li>
        });
      
        return ( 
          <nav className="navbar bg-light">
              
              <li className="navbar-brand">
                  <Link exact to="/"> eShopWeb</Link>
             </li>
                  <ul className="nav mr-auto">
                      <li className="nav-item" > 
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                         {dropMenu}
                        </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link"> */}
                              <Link className="nav-link" to="/link">Link</Link>
                        {/* </a> */}
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