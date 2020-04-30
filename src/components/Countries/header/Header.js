import React from 'react'
import tw from 'tailwind.macro';
// import { FaRegMoon } from 'react-icons/fa';
// import Spinner from 'react-bootstrap/Spinner'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
class Header extends React.Component{
    render(){
        const {selectedTheme,onChangeTheme}=this.props;
        return(<div className="flex justify-center items-center">
            <AiOutlineLoading3Quarters/>
            <button className= {selectedTheme!=="light"? "dark-theme theme":"light-theme theme"}
            onClick={onChangeTheme}> {selectedTheme==="light" ? "Light Mode" : "Dark Mode"}
            </button>
            </div>
            );
    }
}

export {Header};
