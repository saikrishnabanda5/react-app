/* global expect */
import CartStore from '.';
import ProductStore from  '../ProductStore';
import ProductService from '../../services/ProductService/ProductAPI.api';

describe("CartStore Test",()=>{
    let productAPI;
    let productStore;
    let cartStore;
    beforeEach(()=>{
        productAPI = new ProductService();
        productStore = new ProductStore(productAPI);
        cartStore = new CartStore(productStore);
    });  
    it("Initial values of cartStore",()=>{
        expect(cartStore.cartProductList.length).toBe(0);
    });
    it("should render by clicking Add to cart",()=>{
        const mockcartProductList=[{productId:"11",productName:"t-shirt"}];
        const mockProductDetails = [{productId:"11",productName:"jeans"}];
        cartStore.onClickAddToCart(mockProductDetails);
        expect(mockcartProductList.length).toBe(1);
        cartStore.onClickAddToCart(mockProductDetails);
        expect(mockcartProductList.length).toBe(1);
    });
    it("should remove item from cart",()=>{
      const mockItem = {quantity:"1",object:{price:"2",value:"hj"},productId:66};
       const mockcartProductList=[{productId:"11",productName:"t-shirt",productId:66}]
       const updatedMockcartProductList=[];
       cartStore.onClickAddToCart(mockItem);
       expect(mockcartProductList.length).toBe(1);
       cartStore.onRemoveCartItem(mockItem);
       expect(updatedMockcartProductList.length).toBe(0);
    });
    it("should clear the store",()=>{
        cartStore.clearStore();
        expect(cartStore.cartProductList.length).toBe(0);
    });
    it("should clear cart items",()=>{
        cartStore.clearCart();
        expect(cartStore.cartProductList.length).toBe(0);
    });
})