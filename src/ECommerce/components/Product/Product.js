import React from 'react'
import {observer,inject} from 'mobx-react'
import { TiTickOutline } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EachProduct,AddToCart,Content,Price,ImageTag,FreeShipping,PriceType,CurrencyFormat,Title} from '../Product/styledComponent.js'
@inject('cartStore')
@observer
class Product extends React.Component{
    notify = () =>{
        toast.success("Product added to your cart!",{
            position:toast.POSITION.BOTTOM_CENTER,
            type:toast.TYPE.WARNING
        });
        
    };
    getCartStore=()=>{
      return this.props.cartStore;
    }
    onClickAddToCart=()=>{ 
        this.notify();
        return this.getCartStore().onClickAddToCart(this.props.product);
    }
    render(){
        const {product}=this.props
        return(
              <EachProduct>
                 <ImageTag>
                      <img className="w-52 h-56 object-cover mb-auto"  src={product.imageURL} />
                      <div>{product.isFreeShipping==true?<FreeShipping>Free shipping</FreeShipping>:null}</div>
                  </ImageTag>
                  <Content>
                      <Title>{product.title}</Title>
                      <Price>
                          <CurrencyFormat>{product.currencyFormat}</CurrencyFormat>
                          <div>{product.price}</div>
                      </Price>
                      <PriceType>or {product.installmentsCount} x {product.currencyFormat} {parseFloat(product.price/product.installmentsCount).toFixed(2)}</PriceType>
                  </Content>
                  <AddToCart onClick={this.onClickAddToCart}>
                      Add to cart
                  </AddToCart>
                   <ToastContainer />
              </EachProduct>
                  )
    }
}
export default Product;