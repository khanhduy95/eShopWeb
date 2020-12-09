import React, { Component } from "react";
class CartComponent extends Component {
  state = {};
  render() {
    var { data } = this.props;
    return (
      <tr>
        <td>{data.product.productName}</td>
        <td>
        <input type="text" style={{height:35}} name="quantity" value={data.quantity}/>
        </td>
        {/* <td>{data.quantity}</td> */}
        
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.removeItem(data.product.productId)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
    }
    removeItem = (id) => {
        this.props.removeItem(id);
      };
}

export default CartComponent;
