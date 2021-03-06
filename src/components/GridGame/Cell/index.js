import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import gameStore from '../../../stores/GameStore';
import cellDetails from '../cellDetails.js'
import CellTheme from '../Cell/styledComponent.js';
@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    timeOut=[] 
    
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false; 
    }
    componentDidMount(){
       let id=setTimeout(()=>{
            this.shouldShowHiddenCells=false;
            
           let id=setTimeout(()=>{
              gameStore.resetGame();
            },this.props.gridSize*2000);
            this.timeOut.push(id);
            
        }, this.props.gridSize*1000);
        this.timeOut.push(id);
        
    }
    componentWillUnmount(){
        this.timeOut.forEach((id)=>{
            clearTimeout(id);
        });
    }
    onClickCell=()=>{
        let isClicked=this.isClickedOnCell;
        this.isClickedOnCell=true;
           let id=setTimeout(()=>{
                if(isClicked==false){
                       this.props.onClickCell(this.props.id);
                }
            },100);
        this.timeOut.push(id);
    }
    render(){
        const {level,isHidden,theme}=this.props;
        return(
            <CellTheme onClick={this.onClickCell} isHidden={isHidden} 
               shouldShowHiddenCells={this.shouldShowHiddenCells} isClickedOnCell={this.isClickedOnCell} 
               width={(cellDetails[level].gridWidth-[6*cellDetails[level].gridSize])/cellDetails[level].gridSize} 
               disabled={this.shouldShowHiddenCells} theme={theme}>
            </CellTheme> 
            );
    }
    
}
export default Cell;