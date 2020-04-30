import {observable,action} from 'mobx'
class ProductModel{
    @observable productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL
    constructor(props){
        this.productId=props.productId;
        this.availableSizes=props.availableSizes;
        this.currencyFormat=props.currencyFormat;
        this.currencyId=props.currencyId;
        this.description=props.description;
        this.installmentsCount=props.installmentsCount;
        this.isFreeShipping=props.isFreeShipping;
        this.price=props.price;
        this.printStyle=props.printStyle;
        this.title=props.title;
        this.imageURL=props.imageURL;
    }
}
export default ProductModel;


