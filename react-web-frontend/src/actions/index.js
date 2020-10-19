import * as types from '../constants/actionType';


export const actAddToCart =(product,quantity)=>{
    return {
        type:"ADD_TO_CART",
        product,
        quantity,
    }
}