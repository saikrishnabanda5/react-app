import {observable,action} from 'mobx';
class CellModel {
    @observable id;
    @observable isHidden;
    @observable isClickedOnCell
    constructor(id,isHidden,isClickedOnCell){
        this.id=id;
        this.isHidden=isHidden;
        this.isClickedOnCell=isClickedOnCell;
    }
}
export default CellModel;