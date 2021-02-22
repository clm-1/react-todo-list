import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import style from '../css/InfoBar.module.css';

const InfoBar = () => {
  const { todos, createTimestamp } = useContext(TodoContext);
  let thing = todos.length === 1 ? 'thing' : 'things';

  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = dayArray[new Date().getDay()];

  return ( 
    <div className={style.infoBarWrapper}>
      <div className={style.timeWrapper}>
        <span className={style.day}>{day}</span>
        <span className={style.timeStamp}>{ createTimestamp()[0] }</span>
      </div>
      <span className={style.infoText}>You have <strong>{todos.length}</strong> {thing} to do</span>
    </div>
   );
}
 
export default InfoBar;