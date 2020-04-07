
class TodoApp extends React.Component{
    state={
        selectedFilterAll:"All",
        todos:[{
            // isChecked:true,
            // content:"",
            // id:4,
            // isDisabled :true,
            // isFocussed:true,
            // isStrikeThrough:true,
            }]
    }
    todoId=0
    onSubmit=(event)=>{
        let newTodo = {
            isChecked :false,
            content,
            id:this.todoId,
            isFocussed:false
        }
        //state is immutable
        // const prevTodo = this.state.todos.slice(0)
        // prevTodo.push(newTodo)
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }
    render(){
        const {selectedFilterButton,todos} =this.state;
        let renderTodos  = todos
        const activeTodos = todos.filter(eachTodo =>eachTodo.isChecked);
        const completedTodo = todos.filter(eachTodo => !eachTodo.isChecked)
            if(this.state.selectedFilterButton==="Active"){
                renderTodos=activeTodos
            }
            if(this.state.selectedFilterButton==="Active"){
                renderTodos=completedTodo
            }
        return(
            <h2> 
            <UserInput onSubmit={this.onSubmit} />
            <TodoList todos={renderTodos} />
            <TodoFooter selectedFilterButton={selectedFilterButton}/>
            </h2>
            )
    }
}

//state is immutable

//not understood why todos wrote here.