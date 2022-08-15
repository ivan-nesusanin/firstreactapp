import { Link } from 'react-router-dom';
import { Image } from 'antd';
import '../styles/NavBar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Image
        width={35}
        src="https://cdn.icon-icons.com/icons2/1812/PNG/512/4213441-community-group-leader-people-team-users_115403.png"
      />
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
