import React from 'react';

export default function WithCountries(WrappedComponent){
    return class EnhancedComponent extends React.Component{
             state={
                 Countries:[],
             }
        
        async  componentDidMount() {
            let response = await fetch(`https://restcountries.eu/rest/v2/all`);
            let json = await response.json();
            this.setState({ 
                Countries: json,
                });
        }
        
        render(){
            return <WrappedComponent Countries={this.state.Countries} {...this.props}/>;
        }
    };
}
// using render prop