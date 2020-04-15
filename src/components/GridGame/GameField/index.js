import React from 'react';
import cellDetails from '../cellDetails.js'
import Cell from '../Cell';
class GameField extends React.Component{
    render(){
        console.log(cellDetails)
        return(
            <div>
            <Cell />
            </div>
            )
    }
}
export default GameField;