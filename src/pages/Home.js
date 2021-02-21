import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
  return ( 
    <div>
      <NewTodoForm />
      <TodoList />
    </div>
   );
}
 
export default Home;