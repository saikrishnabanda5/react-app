import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import {CarsList,Car} from './components/CarsList/index1.js';
import {TodoList,Todo} from './components/todoList/todoList.js';
import{Counter} from './components/CarsList/index.js'
import {Greeting} from './components/Forms/Greetings.js';
import {FavouriteDessert} from './components/Forms/Dessert.js';
import {VisitedCities} from './components/Forms/VisitedCities.js';
import {YourState} from './components/Forms/YourState.js';
import {DisableOrEnable} from './components/Forms/Disable.js';
import CountriesDashboardApp from './components/Countries/countryDashboard/CountriesDashboard.js';
import {EmojiGame} from './components/Emojis/EmojiGame/EmojiGame.js'
import CountryCard from './components/Countries/countryCard/CountryCard.js';
import logo from './logo.svg'
import './App.css';
import './components/todoList/index.css';
import './components/Countries/index.css';

export default class App extends React.Component{
    state={
      selectedTheme:"light",
      themeType:"light",
  }
  onChangeTheme=()=>{
        if(this.state.selectedTheme=="light"){
            this.setState({
                selectedTheme:'dark'
            });
        }
        else{
            this.setState({
                selectedTheme:'light'
            });
        }
    }
  onChangeEmojiTheme=()=>{
        if(this.state.themeType=="light"){
            this.setState({
                themeType:"dark",
            });
        }
        else{
            this.setState({
                themeType:"light",
            });
        }
    }
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>    
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/page-1">
            <Page1 />
          </Route>
          <Route path="/emoji-game">
            <EmojiGame selectedTheme={this.state.themeType} onChangeEmojiTheme={this.onChangeEmojiTheme} />
          </Route>
          <Route path="/CountriesDashboardApp">
            <CountriesDashboardApp selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
          </Route>
          <Route path="/todo-list">
            <TodoList />
          </Route>
          <Route path="/carlist">
            <CarsList />
          </Route>
          <Route path="/form-components">
            <FormComponents />
          </Route>
          <Route path="/:id" children=<CountryCard selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>/>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  

function About() {
  return <div>
  <h2>CarsList</h2>
  <div> <CarsList/> </div>
  </div>
}


function FormComponents() {
  return (
      <Switch>
          <Route path="/form-components/greetings">
            <Greeting />
          </Route>
        <Route path="/form-components/favorite-dessert">
            <FavouriteDessert />
          </Route>
        <Route path="/form-components/visited-cities">
            <VisitedCities />
          </Route>
          <Route path="/form-components/your-state">
            <YourState />
          </Route>
          <Route path="/form-components/disabled-enabled">
            <DisableOrEnable />
          </Route>
          
          <div>
          
            <div style={{display:"flex",backgroundColor:"black",color:"white"}}>
            <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/"  >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
                <h3 style={{marginTop:"25px"}}>Form components</h3>
            </div>
            
    <ul> 
            <li>
              <Link to="/form-components/greetings">Greeting</Link>
            </li>
            <li>
              <Link to="/form-components/favorite-dessert">FavouriteDessert</Link>
            </li>
            <li>
              <Link to="/form-components/visited-cities">VisitedCities</Link>
            </li>
            <li>
              <Link to="/form-components/your-state">YourState</Link>
            </li>
            <li>
              <Link to="/form-components/disabled-enabled">DisableOrEnable</Link>
            </li>
    </ul>
          </div>
   
  </Switch>);
}
}
}