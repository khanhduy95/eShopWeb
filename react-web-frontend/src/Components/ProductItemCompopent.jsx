import React, { Component } from 'react';

class ProductItem extends Component {
    state = {  }
    render() { 
        return (  
            <div className="row">
        <div className="col-md-4">
          <figure className="card card-product">
            <div className="img-wrap"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg" /></div>
            <figcaption className="info-wrap">
              <h4 className="title">Another name of item</h4>
              <p className="desc">Some small description goes here</p>
              <div className="rating-wrap">
                <div className="label-rating">132 reviews</div>
                <div className="label-rating">154 orders </div>
              </div> {/* rating-wrap.// */}
            </figcaption>
            <div className="bottom-wrap">
              <a href className="btn btn-sm btn-primary float-right">Order Now</a>	
              <div className="price-wrap h5">
                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
              </div> {/* price-wrap.// */}
            </div> {/* bottom-wrap.// */}
          </figure>
        </div> {/* col // */}
        <div className="col-md-4">
          <figure className="card card-product">
            <div className="img-wrap"><img src="https://s9.postimg.org/ojb106167/image.jpg" /> </div>
            <figcaption className="info-wrap">
              <h4 className="title">Good product</h4>
              <p className="desc">Some small description goes here</p>
              <div className="rating-wrap">
                <div className="label-rating">132 reviews</div>
                <div className="label-rating">154 orders </div>
              </div> {/* rating-wrap.// */}
            </figcaption>
            <div className="bottom-wrap">
              <a href className="btn btn-sm btn-primary float-right">Order Now</a>	
              <div className="price-wrap h5">
                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
              </div> {/* price-wrap.// */}
            </div> {/* bottom-wrap.// */}
          </figure>
        </div> {/* col // */}
        <div className="col-md-4">
          <figure className="card card-product">
            <div className="img-wrap"><img src="https://s9.postimg.org/4ooze1tof/image.jpg" /></div>
            <figcaption className="info-wrap">
              <h4 className="title">Product name goes here</h4>
              <p className="desc">Some small description goes here</p>
              <div className="rating-wrap">
                <div className="label-rating">132 reviews</div>
                <div className="label-rating">154 orders </div>
              </div> {/* rating-wrap.// */}
            </figcaption>
            <div className="bottom-wrap">
              <a href className="btn btn-sm btn-primary float-right">Order Now</a>	
              <div className="price-wrap h5">
                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
              </div> {/* price-wrap.// */}
            </div> {/* bottom-wrap.// */}
          </figure>
        </div> {/* col // */}
      </div> 
        );
    }
}
 
export default ProductItem;