import React from 'react';
import {observer} from 'mobx-react';
import SizeFilter from '../SizeFilter';
import Header from '../Header';
import ProductList from '../ProductList';
import ProductCart from '../Cart/ProductCart'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import {SignOut,HeaderPart,Top,ECommerce,Body,BodyRightPart,BodyLeftPart} from '../ProductsPage/styledComponent.js'

@observer
class ProductsPage extends React.Component{
    render(){
        const {onClickSignOut,
        getProductStore,getCartStore,
        doNetworkCalls,renderUsersList} = this.props
        const {getProductListAPIError,getProductListAPIStatus}=this.props.getProductStore
        return(
            <ECommerce>
                <Top>
                    <SignOut onClick={onClickSignOut}>SignOut</SignOut>
                    <ProductCart cartStore={getCartStore}/>
                </Top>
            <Body>
                <BodyLeftPart>
                    <strong>Sizes:</strong>
                    <div><SizeFilter onSelectSize={getProductStore.onSelectSize}/></div>
                </BodyLeftPart>
                <BodyRightPart>
                    <HeaderPart>
                        <Header productCount={getProductStore.totalNoOfProductsDisplayed}
                                onSelectSortBy={getProductStore.onSelectSortBy}/>
                    </HeaderPart>
                    <LoadingWrapperWithFailure
                        apiStatus={getProductListAPIStatus}
                        apiError={getProductListAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={renderUsersList}
                    />
                    <ProductList productList={getProductStore.products} 
                    onClickAddToCart={getProductStore.onClickAddToCart}/>
                </BodyRightPart>
            </Body>
            </ECommerce>
            );
    }
}
export default ProductsPage;