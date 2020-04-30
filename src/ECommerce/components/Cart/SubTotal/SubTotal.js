import React from 'react'
import {observer} from 'mobx-react'
import {FaRupeeSign} from "react-icons/fa";
import  {Total,Price,Content,Value} from '../SubTotal/styledComponent.js'
@observer
class SubTotal extends React.Component{
    render(){
        console.log("subtotal",this.props)
        return(
            <Total>
                <Content>
                   SUBTOTAL
                </Content>
                <Price>
                   <FaRupeeSign/>
                   <Value> {parseFloat(this.props.totalPrice).toFixed(2)} </Value>
                </Price>
            </Total>)
    }
}
export default SubTotal;
