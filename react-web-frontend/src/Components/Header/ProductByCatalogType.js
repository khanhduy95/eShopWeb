import React, { Component } from 'react';
import Configuration from '../Configuration';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch} from 'react-router-dom'
class ProductByCatalogType extends Component{
    constructor(props){
        super();
        this.CONFIG = new Configuration() 
        this.state = {  
            products:[],
            match:props.match.params.typeId,
        }
    }
   

    async componentDidMount() {
        const response = await fetch(this.CONFIG.CATALOG_ITEM +"/" + this.state.match);
        const data =await  response.json();
            this.setState({products:data});
            console.log("typeID",data);
    };

    render() { 
        console.log("key",this.state.match);
        const aa=this.state.products.map((data,key)=>{
            return <h1 key={key}>
                {data.productName}
            </h1>
        })
        
        return ( 
            <div>
            {aa}
          </div>
         );
    }
}
 
export default ProductByCatalogType;
