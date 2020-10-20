import React, { Component } from 'react';
class CartComponent extends Component {
    state = {  }
    render() { 
        var {data} = this.props;
        console.log(data)
        return ( 
            <div>
                {data.productName}
            </div>
         );
    }
}
 
export default CartComponent;