import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
    //This if statement checks if the text property of the todo argument is falsy or if it consists only of whitespace characters. If either of these conditions is true, the function returns early without adding the todo to the list.
    if(!todo.text || /^\s*$/.test(todo.text)){
        return
    }

    // spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
    const newTodos = [todo, ...todos]

    setTodos(newTodos)


    setTodos(newTodos)
    };

    const updateTodo = (todoId, newValue) =>{
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    )
  };

    const removeTodo = id => {
      //Checking and see in the actual array the to do item and remove it in the app 
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr);
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          //toggle between true and false
          todo.isComplete = !todo.isComplete
        }
        return todo
      });
      setTodos(updatedTodos);
    }


  return (
    <div>
        <h1>What do you need to do today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo
        todos={todos} 
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList