import {observable,action} from 'mobx'
class CartItemModel{
    @observable cartItemId
    @observable productId
    @observable quantity
    @observable object
    constructor(props){
        this.cartItemId=Math.random()
        this.productId=props.productId
        this.quantity=1
        this.object=props
    }
    @action.bound
    incrementQuantity(){
        this.quantity=this.quantity+1;
    }
}
export default CartItemModel;