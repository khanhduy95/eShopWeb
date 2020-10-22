import * as Types from '../constants/actionType'
export const actAddToCart =(product,quantity)=>{
    return {
        type:Types.ADD_TO_CART,
        product,
        quantity,
    }
}
export const actRemoveItem = (id)=>{
    return {
        type: Types.REMOVE_ITEM,
        id
    }
}