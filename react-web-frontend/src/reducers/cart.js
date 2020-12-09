import * as types from "../constants/actionType";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
  var { product, quantity, id } = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.length === 0) {
        state.push({
          product,
          quantity,
        });
      } else {
         let exist = false; 
         state.forEach(element => {
           if(element.product.productId === product.productId){
              element.quantity ++;
              exist = true
              return false;
            } 
         }); 
         if(exist == false){
          state.push({
            product,
            quantity,
          });
         } 
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.REMOVE_ITEM:
      state.forEach((element, i) => {
        if (element.product.productId === id) {
          state.splice(i, 1);
          return false;
        }
      });
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
