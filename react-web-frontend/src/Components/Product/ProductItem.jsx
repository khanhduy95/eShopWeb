import React, { Component } from "react";
import { baseUrl } from "../../BaseUrl";
class ProductItem extends Component {
  constructor(props) {
    super();
    this.state = {
      url: baseUrl,
      product: [],
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.Id}</h1>
        <h1>{this.props.Name}</h1>
        {this.state.product.map((data, key) => {
          return (
            <tr>
              <td>{data.catalogId}</td>
              <td>{data.catalogName}</td>
            </tr>
          );
        })}
      </div>
    );
  }
}

export default ProductItem;
