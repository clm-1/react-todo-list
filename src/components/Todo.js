import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import style from '../css/Todo.module.css';

const Todo = ({ todo }) => {
  const { removeTodo, completedHandler, moveTodo, editTodo } = useContext(TodoContext);
  const [moved, setMoved] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updateValue, setUpdateValue] = useState('');

  const handleMove = (todo, dir) => {
    if (!todo.completed) {
      moveTodo(todo, dir);
      setMoved(true);
      setTimeout(() => {
        setMoved(false);
      }, 200)
    } 
  }

  const updateValueHandler = (e) => {
    setUpdateValue(e.target.value);
  }

  const handleEditInfo = () => {
    setEdit(!edit);
    setUpdateValue(todo.text);
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    editTodo(todo, updateValue);
    setEdit(false);
  }

  return ( 
    <div className={style.todoWrapper}>
      <div className={`${style.todoItem} ${todo.completed ? style.completed : ''} ${moved ? style.moved : ''}`}>
        <div className={style.textWrapper} onClick={() => completedHandler(todo)}>
          {todo.text}
        </div>
        <div onClick={() => handleMove(todo, -1)} className={`${style.moveBtns}`}>U</div>
        <div onClick={() => handleMove(todo, 1)} className={`${style.moveBtns}`}>D</div>
        <div className={style.edit} onClick={handleEditInfo}>
          <span>E</span>
        </div>
        <div className={style.delete} onClick={() => removeTodo(todo)}>
          <span>X</span>
        </div>
      </div>

      <div className={`${style.editTodo} ${edit ? style.editNow : ''}`}>
        <form className={style.form} onSubmit={handleSubmitEdit}>
          <input type="text" value={updateValue} onChange={updateValueHandler}/>
          <input type="submit" value="UPDATE" />
        </form>
      </div>
    </div>
   );
}
 
export default Todo;