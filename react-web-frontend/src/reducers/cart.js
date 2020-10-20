import * as types from '../constants/actionType';
import products from './products';
//  var data = JSON.parse(localStorage.getItem('CART'))
// var initialState = data ? data : [];
var initialState =[];
const cart = (state = initialState , action) =>{
    var {product,quantity} = action;
    switch(action.type){
        case types.ADD_TO_CART:
            state.push({
                product,
                quantity
            });
            
            console.log("adasd",state)
        default : return [...state];
    }
}

export default cart; 