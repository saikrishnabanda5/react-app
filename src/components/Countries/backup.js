import React from 'react'
let json;
class CountriesDashboardApp extends React.Component{
    constructor(props){
        super();
        this.state={
            Countries:[],
            Countries1: [],
            search:"",
            selectedTheme:'light',
            region:"All",
            regions:['All',"Africa",'Americas','Asia','Europe','Oceania']
        }
    }
    async  componentDidMount() {
    let response = await fetch(`https://restcountries.eu/rest/v2/all`)
      let json = await response.json();
        this.setState({ 
            Countries: json,
            Countries1: json,
        });
    }
    getCountries=()=>{
        const countries= this.state.Countries.map((country)=>{
           return(
               <div className="countrydeltails">
               <img className="countryimg" src={country.flag} />
                <div className="countrycard">
                    <div className="countryname"> {country.name}</div> 
                    <div className="countrypopulation">Population: {country.population}</div> 
                    <div className="countryregion">Region: {country.region}</div> 
                    <div className="countrycapital">Capital: {country.capital}</div> 
               </div>
               </div>
               )
        })
        return countries
    }
    onChangeTheme=()=>{
        if(this.state.selectedTheme=="light"){
            this.setState({
                selectedTheme:'dark'
            })
        }
        else{
             this.setState({
                selectedTheme:'light'
            }) 
        }
    }
    selectARegion=(event)=>{
        if(event.target.value!=="All"){
            this.setState({
                region:event.target.value
            })
              const response= this.state.Countries1.filter((country)=>{
                  if(this.state.search!=""){
                      if(country.region===event.target.value){
                          return country.name.toLowerCase().match(this.state.search)
                      }
                  }
                      return country.region===event.target.value
              })
                this.setState({
                    Countries:response
                })
             }
        else{
            this.setState({
                region:event.target.value
            })
              const response= this.state.Countries1.filter((country)=>{
                if(this.state.search!=""){
                    return country.name.toLowerCase().match(this.state.search)
                }
                    return country.region===event.target.value
              })
                  this.setState({
                    Countries:response
                })
        }
    }
    selectFomRegion=()=>{
        const selectRegion = this.state.regions.map((region)=>{
          return <option value={region}> {region}</option>
        })
        return selectRegion;
    }
    
    filterCountryByTextName=(event)=>{
        if(event.keyCode==13){
            let searchValue = event.target.value
            let searchCountry = this.state.Countries1.filter((country)=>{
                if(country.region==this.state.region){
                 return (country.name.toLowerCase().match(event.target.value))
                }
                else if(this.state.region==="All"){
                 return (country.name.toLowerCase().match(event.target.value))
                }
            })
        this.setState({  
            Countries:searchCountry,
            search:searchValue
        })
        }
    }
    render(){
        return(
            <div className= {this.state.selectedTheme!=="light"? "dark-theme ":"light-theme"}>
            <div className="header">
            <h3> Where in the World? </h3>
            <button className= {this.state.selectedTheme!=="light"? "dark-theme theme":"light-theme theme"}
            onClick={this.onChangeTheme}> {this.state.selectedTheme==="light" ? "Light Mode" : "Dark Mode"}</button>
            </div>
            <div className="filters">
            <input  className="search" onKeyDown={this.filterCountryByTextName} placeholder="Search for a country"/>
            <select className="select" onChange={this.selectARegion} > {this.selectFomRegion()} </select>
            </div>
            <div className="main">{this.getCountries()} </div>
            </div>
            )
    }
}
export {CountriesDashboardApp}