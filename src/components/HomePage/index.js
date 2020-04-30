import React from "react";
import { Link,Redirect } from "react-router-dom";
import logo from "../../logo.svg";
import {getCookie,ACCESS_TOKEN} from '../../Authentication/utils/StorageUtils'
class HomePage extends React.Component {
  
  getSignInPage=()=>{
      return(<Redirect to={{ pathname:"/signin" }}/>)
  }
  getProductsPage=()=>{
    return(<Redirect to={{ pathname:"/products" }}/>)
  }

  render(){ 
  // return getCookie(ACCESS_TOKEN)===undefined?this.getSignInPage():this.getProductsPage()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to ="/signin">E-commerce</Link>
        <Link to="/login">Login Page</Link>
        <Link to="/users">Users Page</Link>
        <Link to="/grid-game">Grid Game</Link>
        <Link to="/example">Example</Link>
        <Link to="/event-list">Event List</Link>
        <Link to="/todo-app-mobx">TodoList Mobx</Link>
        <Link to="/counter-app">Counter App</Link> 
        <Link to="/page-1">Page 1</Link>
        <Link to="/todo-list">TodoList</Link>
        <Link to="/carlist">CarsList</Link>
        <Link to="/form-components">Form Components</Link>
        <Link to="/CountriesDashboardApp">Countries List</Link>
        <Link to="/emoji-game">Generate Emoji</Link>
      </header>
    </div>
  );
}
}
export default HomePage;
// gotoGridScreenIfLoggedIn=()=>{
  //   return(
  //     <Redirect
  //     to={{
  //       pathname:"/emoji-game"
  //     }}
  //     />
  //     )
  // }
  
  
  // return(
  //   getCookie(ACCESS_TOKEN)?"":""
  //   )
  
  /// if(true){
    //   return this.gotoGridScreenIfLoggedIn()
    // }