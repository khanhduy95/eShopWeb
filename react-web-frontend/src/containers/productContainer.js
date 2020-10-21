import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomePage from '../pages/HomePage/HomePage';
import ProductItem from '../components/ProductItem/ProductItem';
import PropTypes from 'prop-types';
import { actAddToCart } from '../actions/index';
class ProductContainer extends Component {
    constructor(props){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        fetch("https://localhost:44349/api/CatalogItems")
        .then(res=>res.json())
        .then(data=>
             this.setState({
                 products:data
            }))
    }
    render() { 
       
        // var {products} = this.props;
       
        return (
                <HomePage>
                    {this.showProduct(this.state.products)}
                </HomePage>
            );
    }
            
    showProduct(products){
        var result = null;
        var {onAddToCart} =this.props
        if (products.length > 0){
            result = products.map((data,key)=>{
                    return <ProductItem
                            key={key}
                            data = {data}
                            onAddToCart = {onAddToCart}
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
    // var pro=null;
    // fetch("https://localhost:44349/api/CatalogItems")
    // .then(res=>res.json())
    // .then(data=>
    //     prop = data 
    //  );
    return {products : state.cart}
} 
 
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onAddToCart : (product) =>{
            dispatch(actAddToCart(product,1))
        }
    }
}

export default connect(mapStateToPros,mapDispatchToProps)(ProductContainer);