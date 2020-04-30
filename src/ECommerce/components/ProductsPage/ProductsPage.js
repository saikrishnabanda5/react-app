import React from 'react';
import {observer,inject} from 'mobx-react';
import SizeFilter from '../SizeFilter';
import Header from '../Header';
import ProductList from '../ProductList';
import ProductCart from '../Cart/ProductCart'
import {withRouter} from "react-router-dom";
import history from 'history'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import {SignOut,HeaderPart,Top,ECommerce,Body,BodyRightPart,BodyLeftPart} from '../ProductsPage/styledComponent.js'
@inject('productStore')
@inject('authStore')
@inject('cartStore')
@observer
class ProductsPage extends React.Component{
    componentDidMount(){
        this.doNetworkCalls();
    }
    getProductStore=()=>{
      return this.props.productStore;
    }
    doNetworkCalls=()=>{
        this.getProductStore().getProductList()
    }
    onClickSignOut=()=>{
        this.props.authStore.userSignOut();
        const {history} = this.props;
        history.replace('/signin');
    }
    renderUsersList=()=>{
        return ""
    }
    render(){
        const {getProductListAPIError,getProductListAPIStatus}=this.getProductStore();
        return(
            <ECommerce>
                <Top>
                    <SignOut onClick={this.onClickSignOut}>SignOut</SignOut>
                    <ProductCart cartStore={this.props.cartStore}/>
                </Top>
            <Body>
                <BodyLeftPart>
                    <strong>Sizes:</strong>
                    <div><SizeFilter onSelectSize={this.getProductStore().onSelectSize}/></div>
                </BodyLeftPart>
                <BodyRightPart>
                    <HeaderPart>
                        <Header productCount={this.getProductStore().totalNoOfProductsDisplayed}
                                onSelectSortBy={this.getProductStore().onSelectSortBy}/>
                    </HeaderPart>
                    <LoadingWrapperWithFailure
                        apiStatus={getProductListAPIStatus}
                        apiError={getProductListAPIError}
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderUsersList}
                    />
                    <ProductList productList={this.getProductStore().products} 
                    onClickAddToCart={this.getProductStore().onClickAddToCart}/>
                </BodyRightPart>
            </Body>
            </ECommerce>
            );
    }
}
export default withRouter(ProductsPage);