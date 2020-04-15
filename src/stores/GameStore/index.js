import {observable} from 'mobx';

class GameStore {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    constructor(){
        this.level=0;
        this.topLevel=0;
        this.cells();
        this.currentLevelGridCells=[];
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
    }
    cells(){
        
    }
    onCellClick(){
        
    }
    setGridCells(){
        
    }
    goToNextLevelAndUpdateCells(){
        
    }
    goToInitialLevelAndUpdateCells(){
        
    }
    resetSelectedCellsCount(){
        
    }
    incrementSelectedCellsCount(){
        
    }
    onPlayAgainClick(){
        
    }
    resetGame(){
        
    }
    setTopLevel(){
        
    }
}
const gameStore= new GameStore();
export default gameStore;