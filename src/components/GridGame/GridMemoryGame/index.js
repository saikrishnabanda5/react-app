import React from 'react';
import {observer} from 'mobx-react'
import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import {GridGame} from '../GridMemoryGame/styledComponent.js';
import Header from '../Header';
import GameField from '../GameField';
import GameResult from '../GameResult';
@observer
class GridMemoryGame extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<GridGame theme={themeStore.selectedTheme}>
                <Header theme={themeStore.selectedTheme} level={gameStore.level}
                topLevel={gameStore.topLevel} onChangeSelectedTheme={themeStore.onChangeSelectedTheme}/>
                <GameField onCellClick={gameStore.onCellClick} level={gameStore.level}/>
              </GridGame>)
    }
}
export default GridMemoryGame;

// <GameResult />
