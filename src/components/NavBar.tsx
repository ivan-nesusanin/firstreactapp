import { Link } from 'react-router-dom';
import { Image } from 'antd';
import '../styles/NavBar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Image width={35} src={require('../assets/svg/logo.svg').default} />
      <div>
        <Link to="/" className="link">
          На главную
        </Link>
        <Link to="/users" className="link">
          Пользователи
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
