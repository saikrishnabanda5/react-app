import  React from 'react';
import {Button} from './styledComponent';
class ButtonComponent extends React.Component{
    render(){
  const {text,backgroundcolor,padding} =this.props;
        return(
            <Button backgroundColor={backgroundcolor} style={{margin:"20px"}}
            padding={padding}>{text} </Button>
             );
    }
}
export default ButtonComponent;