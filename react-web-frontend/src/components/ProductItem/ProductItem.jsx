import React, { Component } from "react";
class ProductItem extends Component {
  constructor(props) {
    super();
    this.state = {
      product: [],
    };
  }
 
  render() {
    var {data}=this.props
    return (
      <div className="col-4">
      <div className="card">
        <img
          className="card-img-top"
          src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.price}</p>
         <div className="row mr-auto">
           <div className="col"><button onClick={() => this.onAddToCart(data)} className="btn btn-danger">Add to cart</button></div>
           <div className="col"><button className="btn btn-danger">View Detail</button></div>
         </div>
        </div>
      </div>
    </div>
    );
  }
  onAddToCart = (product) =>{
    this.props.onAddToCart(product);
  }
}

export default ProductItem;
