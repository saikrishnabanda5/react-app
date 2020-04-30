import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import { FiShoppingCart } from "react-icons/fi";
import CartList from '../CartList'
import SubTotal from '../SubTotal'
import CheckOut from '../CheckOut'
import {ShowCart,HideCart,Close,CartLogo,Cart,ShowItemsInCart,CartContent,ItemsInCart,Logo,ShowCartLogo} from '../ProductCart/styledComponent.js'
@observer
class ProductCart extends React.Component{
    @observable shouldDisplayCart
    constructor(props){
        super(props)
        this.shouldDisplayCart=false;
    }
    showCart=()=>{
        this.shouldDisplayCart=true;
    }
    hideCart=()=>{
        this.shouldDisplayCart=false;
    }
    render(){``
        return(
            <div>
            {!this.shouldDisplayCart?
            <ShowCart onClick={this.showCart} >
                <ShowCartLogo>
                    <Logo><FiShoppingCart /></Logo>
                    <ShowItemsInCart>{this.props.cartStore.itemsInCart}</ShowItemsInCart>
                </ShowCartLogo>
            </ShowCart>:
            <HideCart>
                <Close onClick={this.hideCart}>X </Close>
                <Cart>
                
                    <CartLogo>
                         <Logo><FiShoppingCart/> </Logo>
                         <ItemsInCart>{this.props.cartStore.itemsInCart}</ItemsInCart>
                        <CartContent>Cart </CartContent> 
                    </CartLogo>
                </Cart>
                <CartList onRemoveCartItem={this.props.cartStore.onRemoveCartItem}
                getProductDetailsById={this.props.cartStore.getProductDetailsById}
                productsInCart={this.props.cartStore.cartProductList} 
                totalPrice={this.props.cartStore.productPrice}/>
                <SubTotal totalPrice={this.props.cartStore.productPrice}/>
                <CheckOut totalPrice={this.props.cartStore.productPrice}
                cartProductList={this.props.cartStore.cartProductList}
                clearCart={this.props.cartStore.clearCart}
                />
            </HideCart>
            
            }
            </div>)
    }
}
export default ProductCart;