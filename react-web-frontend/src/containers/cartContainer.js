import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../pages/CartPage/Cart';
import CartComponent from '../components/Cart/cartComponent';


class CartContainer extends Component {

    render() { 
       
        var {cart} = this.props;
        return (
                <Cart>
                    {this.showProduct(cart)}
                </Cart>
            );
    }
            
    showProduct(products){
        var result = null;
        if (products.length > 0){
            result = products.map((data,key)=>{
                console.log("sss",data)
                    return <CartComponent
                            key={key}
                            data = {data}
                            />
                })
        }
        return result;
    }            
}

// CartComponent.propTypes ={
//     products : PropTypes.arrayOf(
//         PropTypes.shape({
//             id : PropTypes.number.isRequired,
//             name : PropTypes.string.isRequired,
//             price : PropTypes.number.isRequired,
//         })
//     ).isRequired
// }

const mapStateToPros = state =>{
    // fetch("https://localhost:44349/api/CatalogItems")
    // .then(res=>res.json())
    // .then(data=>
    //     state = data 
    //  );
    return {cart : state.product}
} 
 
export default connect(mapStateToPros,null)(CartContainer);