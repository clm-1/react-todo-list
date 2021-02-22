import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    const timestamp = new Date();
    const date = timestamp.toLocaleDateString('sv-SE');
    const time = timestamp.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit'});

    const newTodo = {
      text: todoText,
      completed: false,
      id: Math.random() * 1000,
      time: `${date} ${time}`,
    }
    setTodos([newTodo, ...todos]);
  }

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter(todo => todo.id !== todoToRemove.id));
  }

  const editTodo = (todoToEdit, newValue) => {
    setTodos(todos.map(todo => {
      if (todoToEdit.id === todo.id) {
        return {...todo, text: newValue};
      }
      return todo;
    }))
  }

  const completedHandler = (todoToChange) => {
    let tempTodos = [...todos];
    let index = tempTodos.indexOf(todoToChange);
    tempTodos[index].completed = !tempTodos[index].completed;
    
    if (tempTodos[index].completed) {
      let todoToMove = tempTodos.splice(index, 1);
      tempTodos.push(...todoToMove);
    } else if (!tempTodos[index].completed) {
      let todoToMove = tempTodos.splice(index, 1);
      let insertIndex = null;
      for (let i = 0; i < tempTodos.length; i++) {
        if (tempTodos[i].completed) {
          insertIndex = i;
          break;
        }
      }
      if (insertIndex !== null) {
        tempTodos.splice(insertIndex, 0, ...todoToMove);
      } else {
        tempTodos.push(...todoToMove);
      }
    }

    setTodos(tempTodos);

    // setTodos(todos.map(todo => {
    //   if (todo.id === todoToChange.id) {
    //     return {...todo, completed: !todo.completed};
    //   }
    //   return todo;
    // }))
  }

  const moveTodo = (todo, dir) => {
    let tempTodos = [...todos];
    let index = todos.indexOf(todo);
    if (dir === -1 && index !== 0 || dir === 1 && index !== tempTodos.length - 1 && !todos[index + 1].completed) {
      let todoToMove = tempTodos.splice(index, 1);
      tempTodos.splice(index + dir, 0, ...todoToMove);
      setTodos(tempTodos); 
    }
  }

  const values = {
    todos,
    setTodos,
    addTodo,
    removeTodo,
    completedHandler,
    moveTodo,
    editTodo,
  }

  return ( 
    <TodoContext.Provider value={values}>
      { props.children }
    </TodoContext.Provider>
   );
}
 
export default TodoContextProvider;
