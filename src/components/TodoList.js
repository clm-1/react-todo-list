import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return ( 
    <div>
      { todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
   );
}
 
export default TodoList;