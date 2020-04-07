

class userinput extends React.Component{
    state = {
        userinput:"",
    }


onchangeuserinput=(event)=>{
    this.setState({
        userinput:event.target.value,
    })
}
onSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.userinput);
    this.setState({
         userinput:"",
    })
}
render(){
    const {userinput} = this.state;
    return(<form onSubmit ={this.onSubmit}>
    <input type="text"
    value={userinput} 
    onchange={this.onchangeuserinput} />        
    </form>
        )
}
}



//Better to write form tag