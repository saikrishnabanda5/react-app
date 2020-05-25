import {observable,action,computed} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import ProductService from '../../services/ProductService/ProductAPI.api.js';
import ProductModel from '../models/ProductModel';
class ProductStore {
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable productList
    @observable sizeFilter
    @observable sortBy
    @observable limit
    @observable offset
    @observable total
    productsAPIService
    constructor(ProductService){
        this.productsAPIService=ProductService;
        this.init();
    }
    @action
    init(){
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.productList=[];
        this.sizeFilter=[];
        this.sortBy='SELECT';
        this.limit=1;
        this.offset=10;
        this.total=[];
    }
    @action.bound
    setProductListResponse(productResponse){
        this.total=productResponse.total;
        productResponse.products.forEach((object)=>{
            const productListModel = 
                new ProductModel({productId:object.id,availableSizes:object.availableSizes.map((size)=>{
                    return size;
                }),currencyFormat:object.currencyFormat,currencyId:object.currencyId,
                description:object.description,installmentsCount:object.installments,
                isFreeShipping:object.isFreeShipping,price:object.price,
                printStyle:object.style,title:object.title,imageURL:object.image
                });
            this.productList.push(productListModel);
        });
    }
    
    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getProductListAPIStatus=apiStatus;
    }
    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error;
    }
    @computed
    get products(){
        return this.sortedAndFilteredProducts;
    }
    @computed
    get sortedAndFilteredProducts(){
        const filteredProducts = this.productList.filter(item=>this.sizeFilter.length==0||
        (item.availableSizes.filter((eachSize)=>
        this.sizeFilter.includes(eachSize)).length>0
        )
    );
       if(this.sortBy==='ASCENDING'){
            filteredProducts.sort((a,b)=>a.price>b.price);
       }
       else if(this.sortBy==='DESCENDING'){
           filteredProducts.sort((a,b)=>a.price<b.price);
       }
        return filteredProducts;
    }
    @computed
    get totalNoOfProductsDisplayed(){
        return this.products.length;
    }
    @action.bound
    onClickLeftArrow(){
        alert()
    }
    @action.bound
    onClickRightArrow(){
        
    }
    @action.bound
    onSelectSortBy(value){
        this.sortBy=value;
    }
    @action.bound
    onSelectSize(value){
        if(!this.sizeFilter.includes(value)){
           this.sizeFilter.push(value);
        }
        else{
           this.sizeFilter = this.sizeFilter.filter((size)=>(size!=value));
        }
    }
    @action.bound
    getProductList(){
        const AuthenticationPromise =this.productsAPIService.getProductsAPI(this.limit,this.offset);
        return bindPromiseWithOnSuccess(AuthenticationPromise)
                .to(this.setGetProductListAPIStatus,this.setProductListResponse)
                .catch(this.setGetProductListAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default ProductStore;
