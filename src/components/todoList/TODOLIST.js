

const TodoList = prosp =>{
    const {todos} = props
    let renderTodos = todos.map(eachTodo =>{
        return <Todo />
    }
    return (
        <div>
        <Todo 
        {renderTodos}/>
        </div>)
}