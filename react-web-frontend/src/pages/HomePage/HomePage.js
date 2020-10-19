import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import BaseApi from '../../constants/config';
class HomePage extends Component {

    constructor(props){
        super();
        this.CONFIG=new BaseApi();
        // this.state={
        //     products:[]
        // };
    }

    componentDidMount(){
        fetch("https://localhost:44349/api/CatalogItems")
        .then(res=>res.json())
        .then(data=>
             this.setState({
                 products:data
            }))
        // callApi(this.CONFIG.CATALOG_ITEM,"GET",null).then(res=>
        //     // this.setState({
        //     //      products:res.data
        //     // })
        //     console.log(res)
        //     );
    }
    render() { 
        // let product = this.state.products.map((data,key)=>{
        //     return <ProductItem
        //             key={key}
        //             data = {data}
        //             />
        // })
        return (
            <div className="container">
            <div className="row">
                <h1>Product</h1>
            </div>
            <div className="row">
                {this.props.children}
            </div>
          </div>
            );
    }
   
}
 
export default HomePage