/* global fetch */
import React from 'react';
import {withRouter} from 'react-router-dom';
import {Header} from '../header/Header.js' ;
import {CountryBorders} from '../countryBorder/CountryBorders.js';
import WithCountries from '../../hocs/withCountries'
class CountryCard extends React.Component{
    state={
        country:this.props.match.params.id,
        Countries:"",
        individualCountry:""
    }
    getEachCountry=()=>{
          this.props.Countries.map((country)=>{
            if(country.name===this.state.country){
                 this.setState({
                     individualCountry:country
                 });
            }
        });
    }
    onClickBorders=(event)=>{
        const details = this.props.Countries.map((countryCode)=>{
      if(event.target.value==countryCode.alpha3Code){
          this.setState({
              individualCountry:countryCode
          });
        }   
    });
    }
    
    CountryDetails=()=>{
        
        const {individualCountry}=this.state;
        const {selectedTheme}=this.props;
                    return(
                <div className="flex items-center w-full">
                <img className="h-64 w-2/4" src={individualCountry.flag} />
                <div className="ml-12">
                    <div className="text-xl font-bold">{individualCountry.name} </div>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <p><strong>Native Name:</strong> {individualCountry.nativeName} </p>
                            <p><strong>Population:</strong> {individualCountry.population} </p>
                            <p><strong>Region:</strong> {individualCountry.region} </p>
                            <p><strong>Sub Region:</strong> {individualCountry.subregion} </p>
                            <p><strong>Capital:</strong> {individualCountry.capital} </p>
                        </div>
                        <div className="pl-5">
                            <p><strong>Top Level Domain:</strong> {individualCountry.topLevelDomain} </p>
                           {(individualCountry.currencies!==undefined)?<p><strong>Currencies:</strong> {individualCountry.currencies.map(currency=>currency.name).join(",")}</p>:""}
                           {(individualCountry.languages!==undefined)?<p><strong>Languages:</strong> {individualCountry.languages.map(language=>language.name).join(",")}</p>:""}
                        </div>
                    </div>
                     <div><strong>Border Countries:</strong> 
        {individualCountry.borders!=="" ?<CountryBorders countryBorders= {individualCountry.borders} selectedTheme={selectedTheme} onClickBorders={this.onClickBorders} Countries={this.props.Countries}/>:""}
                     </div> 
                </div>
                </div>
                 );
                }
    navigateBack=()=>{
        const {history} = this.props;
        history.goBack();
    }
    render(event){
        if(this.props.Countries!==""&&this.state.individualCountry===""){
             this.getEachCountry()
        }
        const {selectedTheme,onChangeTheme}=this.props
        return(<div className= {selectedTheme==="light"? "light-theme ":"dark-theme"}>
                <div className="flex justify-between items-center mt-5 mb-1 p-5  shadow-xl">
                    <h3> Where in the World? </h3>
                    <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
                </div>
                <div className= {selectedTheme==="light"? "bottom-part ":"dark-theme"}>
                    <button className={selectedTheme==="light"?"text-base border-0 border-solid border-white p-2 m-5 shadow-xl":"text-base border-0 border-solid border-white p-2 m-5 shadow-xl button-dark"} onClick={this.navigateBack}> &#8592; Back</button>
                    <div className="country-back" >
                    {this.CountryDetails()}
                    </div>
                </div>
              </div>
            );
    }
}


export default withRouter(WithCountries(CountryCard));