import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import CartItem from '../CartItem'
import {Height,AddItems} from '../CartList/styledComponent.js'
@observer
class CartList extends React.Component{
    render(){
       return(
                <Height>
                {this.props.productsInCart.length==0?<AddItems>Add some products in the cart</AddItems>:
                <CartItem productsInCart={this.props.productsInCart}
                 onRemoveCartItem={this.props.onRemoveCartItem}
                 totalPrice={this.props.totalPrice}
                />}
               </Height>
               );
    }
}
export default CartList;