import style from '../css/About.module.css';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();

  return ( 
    <div className={style.aboutText}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam, provident, culpa dolor ipsum at fuga deleniti illo tempore tenetur vitae tempora, animi cumque adipisci hic illum quia. Esse quo ab repellat, laborum ipsa saepe, at harum cupiditate eaque ea eligendi sed nostrum sint enim soluta beatae minima. Eius, nesciunt!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam, provident, culpa dolor ipsum at fuga deleniti illo tempore tenetur vitae tempora, animi cumque adipisci hic illum quia. Esse quo ab repellat, laborum ipsa saepe, at harum cupiditate eaque ea eligendi sed nostrum sint enim soluta beatae minima. Eius, nesciunt!</p>

      <button onClick={() => history.push('/')}>Back to list</button>
    </div>
   );
}
 
export default About;