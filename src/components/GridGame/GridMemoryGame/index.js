import React from 'react';
import {observer} from 'mobx-react';
import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import GridGame from '../GridMemoryGame/styledComponent.js';
import Header from '../Header';
import GameField from '../GameField';
import GameResult from '../GameResult';

@observer
class GridMemoryGame extends React.Component{
    render(){
    return(<GridGame theme={themeStore.selectedTheme}>
                <Header theme={themeStore.selectedTheme} level={gameStore.level}
                topLevel={gameStore.topLevel} onChangeSelectedTheme={themeStore.onChangeSelectedTheme}/>
                
                {gameStore.level<7 ?<GameField onCellClick={gameStore.onCellClick} 
                Cells={gameStore.currentLevelGridCells} gridSize={gameStore.gridSize}
                theme={themeStore.selectedTheme} level={gameStore.level}
                />:""}
                
                {gameStore.level===7?<GameResult onPlayAgainClick={gameStore.onPlayAgainClick}
                level={gameStore.level} theme={themeStore.selectedTheme}
                />:""}
          </GridGame>)
    }
}
export default GridMemoryGame;
