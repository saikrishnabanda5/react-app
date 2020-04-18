import {observable,action} from 'mobx';
import CellModel from '../../stores/model/CellModel';
class GameStore {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    @observable isHidden
    @observable id
    @observable gridSize
    @observable list
    constructor(){
        this.level=0;
        this.topLevel=0;
        this.currentLevelGridCells=[];
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.isHidden=false;
        this.id=0;
        this.gridSize=3;
        this.list=[];
        this.setGridCells();
    }
    @action.bound
    onCellClick(id){
        const model= this.currentLevelGridCells.findIndex(eachcell=>eachcell.id==id);
        const cellObject=this.currentLevelGridCells[model];
        if(cellObject.isHidden){
            this.incrementSelectedCellsCount();
            if(this.selectedCellsCount==this.gridSize){
                this.goToNextLevelAndUpdateCells();
            }
        }
        else{
            this.goToInitialLevelAndUpdateCells();
        }
    }
    setGridCells(){
      for(var i=0;i<this.gridSize*this.gridSize;i++){
        const cellModel = new CellModel(this.id++,this.isHidden,false);
        this.currentLevelGridCells.push(cellModel);
      }
      let value;
      for(let i = this.currentLevelGridCells.length - 1; i > 0; i--){
        value =Math.floor(Math.random()*Math.floor(this.currentLevelGridCells.length));
             if(this.list.length<this.gridSize){
                if(!this.list.includes(value)){
                        this.list.push(value);
                }
            }
        }
        this.currentLevelGridCells.map((eachcell,index)=>{
                  this.list.forEach((value)=>{
                      if(value==index){
                        eachcell.isHidden=true;
                      }
                  });
        });
    }
          
    goToNextLevelAndUpdateCells(){
     this.level+=1;
     this.gridSize+=1;
     this.list=[];
     this.currentLevelGridCells=[];
     this.resetSelectedCellsCount();
     this.setGridCells();
    }
    goToInitialLevelAndUpdateCells(){
        this.resetGame();
    }
    resetSelectedCellsCount(){
        this.selectedCellsCount=0;
    }
    incrementSelectedCellsCount(){
        this.selectedCellsCount+=1;
    }
    @action.bound
     onPlayAgainClick(){
        this.topLevel=this.level;
        this.level=0;
        this.gridSize=3;
        this.resetGame();
    }
    @action.bound
    resetGame(){
     this.list=[];
     this.gridSize=3;
     this.currentLevelGridCells=[];
     this.resetSelectedCellsCount();
     this.setTopLevel();
     this.setGridCells();
    }
    setTopLevel(){
        if(this.topLevel<this.level){
            this.topLevel=this.level;
        }
            this.level=0;
    }
}
const gameStore= new GameStore();
export default gameStore;
