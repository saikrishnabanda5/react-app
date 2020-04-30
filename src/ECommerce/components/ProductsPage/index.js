import React from 'react';
import ProductsPage from './ProductsPage.js';
import {observer} from 'mobx-react';

@observer
class Products extends React.Component{
    render(){
        return(
            <ProductsPage />);
    }
}
export default Products;