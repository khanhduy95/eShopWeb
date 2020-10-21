import * as types from "../constants/actionType";
//  var data = JSON.parse(localStorage.getItem('CART'))
// var initialState = data ? data : [];
var initialState = [];
const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.length === 0) {
        state.push({
          product,
          quantity,
        });
      } else {
            var aa = state.filter(data=>data.product.productId == product.productId);
            if(aa.length ==0){
                state.push({
                    product,
                    quantity,
                  });
            }else{
            aa.forEach((element) => {
                      if( element.product.productId === product.productId){
                          element.quantity ++;
                      }else{
                        state.push({
                            product,
                            quantity,
                          });
                      }
                  });
                }
      }
    default:
      return [...state];
  }
};

export default cart;
