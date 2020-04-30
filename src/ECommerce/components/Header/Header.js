import React from 'react'
import {observer} from 'mobx-react'
import ProductSort from '../ProductSort'
import {HeaderStyle,Count} from '../Header/styledComponent.js'
@observer
class Header extends React.Component{
    render(){
        return(
            <HeaderStyle>
              <Count>{this.props.productCount}Product(s) found.</Count>
             <div> <ProductSort onSelectSortBy={this.props.onSelectSortBy}/></div>
            </HeaderStyle>)
    }
}
export default Header;

