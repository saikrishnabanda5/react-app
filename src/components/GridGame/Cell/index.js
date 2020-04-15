import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    constructor(){
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
    }
    // componentDidMount(){
        
    // }
    // onCellClick(){
        
    // }
    render(){
        return 
    }
}
export default Cell;