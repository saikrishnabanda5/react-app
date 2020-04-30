import React from 'react'
import {observer} from 'mobx-react'
import SubTotal from '../SubTotal'
import {Item,Image,Content,Header,Title,RemoveItem,StyleAndPrice,PrintStyle,Price,Quantity} from '../CartItem/styledComponent.js'
@observer
class CartItem extends React.Component{
    onRemoveCartItem=(item)=>{
        return this.props.onRemoveCartItem(item);
    }
    productsInCart=()=>{
       const product =  this.props.productsInCart.map((item)=>{
            return (
                <div>
                <Item key={Math.random()}>
                    <Image><img src={item.object.imageURL}/> </Image>
                    <Content>
                      <Header>
                        <Title>{item.object.title}</Title>
                        <RemoveItem onClick={()=>this.onRemoveCartItem(item)}> X</RemoveItem>
                      </Header>
                      <StyleAndPrice>
                        <PrintStyle>{item.object.printStyle}</PrintStyle>
                        <Price>{item.object.currencyFormat} {item.object.price}</Price>
                      </StyleAndPrice>
                    <Quantity>Quantity:{item.quantity}</Quantity>
                    </Content>
                </Item>
                </div>
                )
        })
        return product
    }
    render(){
        return(
            <div>
             {this.productsInCart()}
            </div>)
    }
}
export default CartItem;