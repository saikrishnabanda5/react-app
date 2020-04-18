import React from 'react';
import {observer} from 'mobx-react';
import Cell from '../Cell';
import cellDetails from '../cellDetails.js';
import GameFieldStyle from '../GameField/styledComponent.js';
@observer
class GameField extends React.Component{
    onClickCell(){
       const cell= this.props.Cells.map((eachCell)=>{
           return <Cell key={eachCell.id} id={eachCell.id} isHidden={eachCell.isHidden} 
           gridSize={this.props.gridSize} theme={this.props.theme}  level={this.props.level}
           onClickCell={this.props.onCellClick} 
           />;
        });
        return cell;
    }
    
    render(){
        return(
            <GameFieldStyle width={cellDetails[this.props.level].gridWidth}>
                {this.onClickCell()}
            </GameFieldStyle>
            );
    }
}
export default GameField;
