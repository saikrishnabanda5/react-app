import React from 'react';
class SearchRegion extends React.Component{
    state={
         regions:['All',"Africa",'Americas','Asia','Europe','Oceania']
    }
     selectFomRegion=()=>{
        const selectRegion = this.state.regions.map((region)=>{
          return <option key={region} value={region}> {region}</option>;
        });
        return selectRegion;
    }
    render(){
        const {selectedTheme,FilterRegionName}=this.props;
        return(
            <select className={selectedTheme!=="light"? "text-lg dark-theme":"text-lg light-theme"} onChange={FilterRegionName} > 
            {this.selectFomRegion()} </select>
            );
    }
}


export {SearchRegion}