import React from 'react'
import {observer} from 'mobx-react'
import {CheckOutButton} from '../CheckOut/styledComponent.js'
@observer
class CheckOut extends React.Component{
    clearCart=(totalPrice)=>{
     alert("Thank you fora shopping witha us 😊.Your products will be delivered in 3 days to the address mentioned in your profile.")  
     return this.props.clearCart(totalPrice)
    }
    enableOrDisable=()=>{
        if(this.props.cartProductList.length===0){
            return true
        }
        else{
            return false
        }
    }
    render(){
        return(
            <div>
            <CheckOutButton onClick={()=>this.clearCart(this.props.totalPrice)} disabled={this.enableOrDisable()}>
                CheckOut
            </CheckOutButton>
            </div>)
    }
}
export default CheckOut;