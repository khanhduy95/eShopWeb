import React, { Component } from "react";
import "../css/HomeProduct.css";
class HomeProduct extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.Name}</h5>
            <p className="card-text">{this.props.Des}</p>
            <a href="" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeProduct;
