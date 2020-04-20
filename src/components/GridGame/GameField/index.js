import React from 'react';
import {observer} from 'mobx-react';
import Cell from '../Cell';
import cellDetails from '../cellDetails.js';
import GameFieldStyle from '../GameField/styledComponent.js';
@observer
class GameField extends React.Component{
    onClickCell(){
      const {gridSize,onCellClick,theme,level}=this.props;
       const cell= this.props.Cells.map((eachCell)=>{
           return <Cell key={eachCell.id} id={eachCell.id} isHidden={eachCell.isHidden} 
           gridSize={gridSize} theme={theme} level={level} onClickCell={onCellClick} />;
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
