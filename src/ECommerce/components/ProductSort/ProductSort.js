import React from 'react'
import {observer} from 'mobx-react'
import Header from '../Header'
@observer
class ProductSort extends React.Component{
    onSelectSortBy=(event)=>{
        return this.props.onSelectSortBy(event.target.value)
    }
    render(){
        return(
            <div>
            Sort price by:
            <select onChange={()=>this.onSelectSortBy(event)}>  
                  <option value="SELECT">Select</option>
                  <option value="ASCENDING">Lowest to Highest</option>
                  <option value="DESCENDING">Highest to Lowest</option>
             </select>
            </div>)
    }
}
export default ProductSort;
