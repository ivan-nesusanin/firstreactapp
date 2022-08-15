import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='link'>На главную</Link>
      <Link to='/users' className='link'>Пользователи</Link>
    </div>
  );
};

export default Navbar;