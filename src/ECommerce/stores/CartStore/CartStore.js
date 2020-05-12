import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import CartItemModel from '../models/CartItemModel'
class CartStore {
    @observable cartProductList
    @observable productStore
    @observable productPrice
    @observable itemsInCart
    constructor(ProductStore){
        this.productStore=ProductStore;
        this.init();
    }
    @action
    init(){
        this.cartProductList=[];
        this.productPrice = 0;
        this.itemsInCart=0;
    }
    @action.bound   
    onClickAddToCart(product){
        this.itemsInCart+=1;
        this.productPrice=this.productPrice+product.price;
        let cartItemModel = new CartItemModel(product)
        const item= (this.cartProductList.find((item)=>item.productId==product.productId))
        if(item){
            item.incrementQuantity()
        }
        else{
            this.cartProductList.push(cartItemModel)
        }
    }
    @action.bound
    onRemoveCartItem(item){
        this.itemsInCart=this.itemsInCart-item.quantity
        this.productPrice=this.productPrice-(item.object.price*item.quantity)
        let index = this.cartProductList.findIndex(eachItem=>item.productId===eachItem.productId);
        this.cartProductList.splice(index,1);
    }
    @action.bound
    clearCart(){
        this.cartProductList=[];
        this.productPrice=0;
        this.itemsInCart=0;
    }
    // @action.bound
    // getProductDetailsById(product){
    //         const productItem = this.productStore.productList.filter((item)=>{
    //             if(item.productId===product.productId){
    //                 return item;
    //             }
    //         })
    //         return productItem
    // }
    
    @action
    clearStore(){
        this.init();
    }
}
export default CartStore;