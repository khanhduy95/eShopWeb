import React, { Component } from "react";
import "./css/Demo.css";

class ProductItem extends Component {
  constructor(props){
    super();
    this.state = {
      product: [],
      active: true,
    };
  }
 

  componentDidMount() {
    fetch("https://localhost:44320/api/CatalogItems")
      .then((response) => response.json())
      .then((data) => this.setState({product:data}));
  }
  render() {
    return <div>
      <table>
        {this.state.product.map((data,key)=>{
          return (
          <tr key={key}>
          <td>{data.productId}</td>
          <td>{data.productName}</td>   
          </tr>
          )
        })}
      </table>
    </div>
  }
}

export default ProductItem;
