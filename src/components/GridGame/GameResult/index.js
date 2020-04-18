import React from 'react'
import {observer} from 'mobx-react'
import {ScoreCard,Score,StatusOfGame,Button} from '../GameResult/styledComponent.js'
@observer
class GameResult extends React.Component{
    
    render(){
        const {level,onPlayAgainClick,theme} =this.props
        return(
            <ScoreCard selectedTheme={theme}>
                <Score selectedTheme={theme}>{level} </Score>
                <StatusOfGame>Congratulations!You completed all the levels </StatusOfGame>
                <Button onClick={onPlayAgainClick}> Play Again</Button>
            </ScoreCard>
            )
    }
    
}
export default GameResult;