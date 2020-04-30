import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {Size,EachSize} from '../SizeFilter/styledComponent.js';
@observer
class SizeFilter extends React.Component{
    @observable selectedFilter
    constructor(props){
        super(props);
        this.selectedFilter=false;
    }
    onSelectSize=(event)=>{
        alert(event.target.value)
        if(this.selectedFilter){
            this.selectedFilter=false;
        }
        else{
            this.selectedFilter=true;
        }
        return this.props.onSelectSize(event.target.value);
    }
    render(){
        return(
            <EachSize>
                <Size onClick={()=>this.onSelectSize(event)} selectedFilter={this.selectedFilter} value="XS">XS</Size>
                <Size onClick={()=>this.onSelectSize(event)} selectedFilter={this.selectedFilter}value="S">S</Size>
                <Size onClick={()=>this.onSelectSize(event)} selectedFilter={this.selectedFilter} value="M">M</Size>
                <Size onClick={()=>this.onSelectSize(event)} selectedFilter={this.selectedFilter} value="L">L</Size>
                <Size onClick={()=>this.onSelectSize(event)} selectedFilter={this.selectedFilter} value="XL">XL</Size>
                <Size onClick={()=>this.onSelectSize(event)} selectedFilter={this.selectedFilter} value="XXL">XXL</Size>
            </EachSize>);
    }
}
export default SizeFilter;