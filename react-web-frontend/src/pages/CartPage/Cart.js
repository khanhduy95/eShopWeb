import React, { Component } from "react";
class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
          <table class="table">
              <thead>
                  <tr>
                      <th>Product Name</th>
                      <th> Quantity</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                 {this.props.children}
              </tbody>
          </table>
        
      </div>
    );
  }
}

export default Cart;
