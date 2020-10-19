import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomePage from '../pages/HomePage/HomePage';
import ProductItem from '../components/ProductItem/ProductItem';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

class ProductContainer extends Component {

    render() { 
       
        var {products} = this.props;
        return (
                <HomePage>
                    {this.showProduct(products)}
                </HomePage>
            );
    }
            
    showProduct(products){
        var result = null;
        if (products.length > 0){
            result = products.map((data,key)=>{
                    return <ProductItem
                            key={key}
                            data = {data}
                            />
                })
        }
        return result;
    }            
}

ProductContainer.propTypes ={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
        })
    ).isRequired
}

const mapStateToPros = state =>{
    // fetch("https://localhost:44349/api/CatalogItems")
    // .then(res=>res.json())
    // .then(data=>
    //     state = data 
    //  );
    return {products : state.products}
} 
 
export default connect(mapStateToPros,null)(ProductContainer);