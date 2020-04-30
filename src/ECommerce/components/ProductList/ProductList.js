import React from 'react'
import {observer} from 'mobx-react'
import Product from '../Product/index.js'
import {Items} from '../Product/styledComponent.js'
@observer
class ProductList extends React.Component{
    ListOfItems=()=>{
        const items=this.props.productList.map((item)=>{
                return(
                <Product key={Math.random()} product={item} onClickAddToCart={this.props.onClickAddToCart}/>
                )
            })
            return items
    }
    render(){
        return(
            <div>
                <div>{this.props.productList.length!==""?<Items>{this.ListOfItems()}</Items>:null}</div>
            </div>)
    }
}
export default ProductList;