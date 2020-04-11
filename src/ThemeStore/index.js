import {observable} from 'mobx';
class ThemeStore{
  @observable selectedTheme
  
  constructor(){
      this.selectedTheme="light";
  }
  setCurrentTheme(){
      if(this.selectedTheme=="light"){
          this.selectedTheme="dark";
      }
      else{
          this.selectedTheme="light";
      }
      alert(this.selectedTheme)
  }
}

const themeStore=new ThemeStore();
export default themeStore;