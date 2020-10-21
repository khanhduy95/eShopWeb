import React, { Component } from 'react';
class CartComponent extends Component {
    state = {  }
    render() { 
        var {data} = this.props;
        console.log("aasd",data)
        return ( 
            <div>
                <table>
                    <tr>
                        <td>name</td>
                        <td>quantity</td>
                    </tr>
                    <tr>
                        <td>{data.product.productName}</td>
                        <td>{data.quantity}</td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default CartComponent;