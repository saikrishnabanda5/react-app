import React from 'react';
class CountryBorders extends React.Component{
    getBorderName=(value)=>{
        let border;
        this.props.Countries.map((country)=>{
            if(country.alpha3Code==value){
                border= country.name;
            }
        });
        return border;
    }
    buttonFunction=()=>{
        if(this.props.countryBorders!==undefined){
            const button = this.props.countryBorders.map((value)=>{
                let countryName = this.getBorderName(value);
                return <button key={value} className={this.props.selectedTheme==="light"?"border-button":"border-button button-dark"} value={value} 
                onClick={this.props.onClickBorders}>{countryName} </button>;
            });
            return button;
        }
    }
    render(){
        return(
            <div>{this.buttonFunction()} </div>
            );
    }
}


export {CountryBorders};