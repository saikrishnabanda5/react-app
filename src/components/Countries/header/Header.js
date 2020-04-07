import React from 'react'
import tw from 'tailwind.macro';
import { FaRegMoon } from 'react-icons/fa';
class Header extends React.Component{
    render(){
        const {selectedTheme,onChangeTheme}=this.props;
        return(<div className="flex justify-center items-center">
            <FaRegMoon/>
            <button className= {selectedTheme!=="light"? "dark-theme theme":"light-theme theme"}
            onClick={onChangeTheme}> {selectedTheme==="light" ? "Light Mode" : "Dark Mode"}
            </button>
            </div>
            );
    }
}

export {Header};
