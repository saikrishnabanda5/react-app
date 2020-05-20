/*global fetch */
import React from 'react';
import {withRouter} from 'react-router-dom';
import {Header} from '../header/Header.js' ;
import {SearchCountry} from '../searchCountry/searchCountry.js';
import {SearchRegion} from '../filterCountry/filterCountry.js';
import {HeaderPart,SelectTheme,BodyPart,SearchAndSelect,ShowCountries}
from '../countryDashboard/styledComponents.js';
import WithCountries from '../../hocs/withCountries';
class CountriesDashboardApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Countries:[],
            duplicateCountries: "",
            search:"",
            region:"All",
      }
    }
    getDuplicateCountries=()=>{
        if(this.props.Countries!=""){
            this.setState({ 
                duplicateCountries: this.props.Countries
            });
        }
    }
    navigateToCountryDetailsPage=(event)=>{
        this.props.Countries.map((country)=>{
            if(country.name==event.currentTarget.id){
                let {history} = this.props;
                history.push(country.name);
            }
        });
    }
    getCountries=()=>{
        const countries= this.props.Countries.map((country)=>{
           return(
               <div className="m-5 w-48 shadow-2xl" id={country.name}  onClick={this.navigateToCountryDetailsPage} >
               <img className="w-52 h-56 object-cover mb-auto"  src={country.flag} />
                <div className="m-3 h-48 flex flex-col justify-around items-start">
                    <div className="text-xl font-bold mb-4"> {country.name}</div> 
                    <div className="text-base mb-4"><strong>Population:</strong> {country.population}</div> 
                    <div className="text-base mb-4"><strong>Region:</strong> {country.region}</div> 
                    <div className="text-base mb-4"><strong>Capital:</strong> {country.capital}</div> 
               </div>
               </div>
               );
        });
        return countries;
    }
    
    selectARegion=(event)=>{
        if(event.target.value!=="All"){
            this.setState({
                region:event.target.value
            });
              const response= this.state.duplicateCountries.filter((country)=>{
                  if(this.state.search!=""){
                      if(country.region===event.target.value){
                          return country.name.toLowerCase().match(this.state.search);
                      }
                  }
                      return country.region===event.target.value;
              });
                this.setState({
                    Countries:response
                });
             }
        else{
            this.setState({
                region:event.target.value
            });
              const response= this.state.duplicateCountries.filter((country)=>{
                if(this.state.search!=""){
                    return country.name.toLowerCase().match(this.state.search);
                }
                    return country.region===event.target.value;
              });
                  this.setState({
                    Countries:response
                });
        }
    }
   
    
    filterCountryByTextName=(event)=>{
        if(event.keyCode===13){
            let searchValue = event.target.value;
            let searchCountry = this.state.duplicateCountries.filter((country)=>{
                if(country.region==this.state.region){
                 return (country.name.toLowerCase().match(event.target.value));
                }
                else if(this.state.region==="All"){
                 return (country.name.toLowerCase().match(event.target.value));
                }
            });
        this.setState({  
            Countries:searchCountry,
            search:searchValue
        });
        }
    }
    render(){
        console.log(this.props.Countries)
        if(this.props.Countries!=""&&this.state.duplicateCountries===""){
            this.getDuplicateCountries()
        }
         const {selectedTheme,onChangeTheme}=this.props;
        return(
            <SelectTheme themeState = {this.props.selectedTheme}>
                <HeaderPart>
                    <h3> Where in the World? </h3>
                    <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme} />
                </HeaderPart>
                <BodyPart themeState = {selectedTheme}>
                <SearchAndSelect>
                        {this.props.Countries!==undefined?<SearchCountry SearchCountryName={this.filterCountryByTextName} selectedTheme={selectedTheme}/>:null}
                        {this.props.Countries!==undefined?<SearchRegion FilterRegionName = {this.selectARegion} selectedTheme={selectedTheme}/>:null}
                </SearchAndSelect>
                {this.props.Countries.length!==0 ? <ShowCountries>{this.getCountries()}</ShowCountries>:<div className="show-data"> No Data Found</div>}
                </BodyPart> 
            </SelectTheme>
            );
    }
}
// export default withRouter(CountriesDashboardApp);
export default (WithCountries(withRouter(CountriesDashboardApp)));

// using render props
//  - 
