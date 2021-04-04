import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
  return ( 
    <div className="home fade-in">
      <NewTodoForm />
      <TodoList />
    </div>
   );
}
 
export default Home;