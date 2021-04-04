import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import style from '../css/NewTodo.module.css';

const NewTodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const todoTextHandler = (e) => {
    setTodoText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  }

  return ( 
    <form onSubmit={submitHandler} className={style.form}>
      <input  type="text" 
              onChange={todoTextHandler} 
              value={todoText} 
              required 
              name="description"/>
      <input type="submit" value="ADD"/>
    </form>
   );
}
 
export default NewTodoForm;