import React, { Component } from 'react';
class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.children}

            </div>
         );
    }
}
 
export default Cart;