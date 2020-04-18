import {observable,action} from 'mobx';
class ThemeStore {
    @observable selectedTheme
    constructor(){
        this.selectedTheme="dark";
    }
    @action.bound
    onChangeSelectedTheme(){
        if(this.selectedTheme==="dark"){
            this.selectedTheme="light";
        }
        else{
            this.selectedTheme="dark";
        }
    }
}
const themeStore=new ThemeStore();
export default themeStore;