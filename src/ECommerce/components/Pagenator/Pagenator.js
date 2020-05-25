import React from 'react';
import {observer} from 'mobx-react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow} from './styledComponent'
@observer
class Pagenator extends React.Component{
    render(){
        console.log(this.props)
        const {limit,offset,productList,onClickLeftArrow,onClickRightArrow} =this.props;
        return(
            <Pages >
                <LeftArrow onClick={onClickLeftArrow}>
                    <AiOutlineArrowLeft/>
                </LeftArrow>
                <CurrentPageNumber>3</CurrentPageNumber>
                <TotalNumberOfPages>7</TotalNumberOfPages>
                <RightArrow onClick={onClickRightArrow}>
                    <AiOutlineArrowRight/>
                </RightArrow>
            </Pages>
            );
    }
}
export default Pagenator;