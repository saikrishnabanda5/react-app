import React from 'react';
import {observer} from 'mobx-react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow} from './styledComponent'
@observer
class Pagenator extends React.Component{
    render(){
        return(
            <Pages>
                <LeftArrow>
                    <AiOutlineArrowLeft/>
                </LeftArrow>
                <CurrentPageNumber>3</CurrentPageNumber>
                <TotalNumberOfPages>7</TotalNumberOfPages>
                <RightArrow>
                    <AiOutlineArrowRight/>
                </RightArrow>
            </Pages>
            );
    }
}
export default Pagenator;