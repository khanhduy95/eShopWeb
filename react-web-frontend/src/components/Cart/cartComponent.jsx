import React, { Component } from "react";
class CartComponent extends Component {
  state = {};
  render() {
    var { data } = this.props;
    return (
      <tr>
        <td>{data.product.productName}</td>
        <td>{data.quantity}</td>
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
