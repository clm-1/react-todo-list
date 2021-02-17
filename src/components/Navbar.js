import { NavLink } from 'react-router-dom';
import style from '../css/Navbar.module.css';
 
const Navbar = () => {
  return ( 
    <nav className={style.navbar}>
      {/* <NavLink activeClassName={style.activeLink} className={style.link} exact to="/">Home</NavLink>
      <NavLink activeClassName={style.activeLink} className={style.link} exact to="/about">About</NavLink> */}
    </nav>
   );
}
 
export default Navbar;