import React from 'react'
import { IoIosSearch } from 'react-icons/io';
import tw from 'tailwind.macro'
import {SearchBar} from '../searchCountry/styledComponents.js'
class SearchCountry extends React.Component{
    render(){
        const {selectedTheme,SearchCountryName}=this.props
        return(
            <SearchBar>
                <IoIosSearch className={selectedTheme==="light"?"light-theme p-1 text-xl": "search-dark-style"}/>
                <input className={selectedTheme==="light"?"light-theme search":"search search-dark-style"} onKeyDown={SearchCountryName}
                placeholder="Search for a country..."/>
            </SearchBar>
            )
    }
}


export {SearchCountry}