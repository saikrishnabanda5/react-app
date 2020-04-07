import React from 'react'
import {ScoreCard,Score,StatusOfGame,Button} from '../WinOrLose/styledComponents.js'
class WinOrLose extends React.Component{
    
    render(){
        const {score,gameState,onPlayAgainClick,selectedTheme} =this.props
        return(
            <ScoreCard selectedTheme={selectedTheme}>
                <Score selectedTheme={selectedTheme}>{score} </Score>
                <StatusOfGame gameState={gameState} > You {gameState}! </StatusOfGame>
                <Button onClick={onPlayAgainClick}> Play Again</Button>
            </ScoreCard>
            )
    }
    
}
export default WinOrLose;