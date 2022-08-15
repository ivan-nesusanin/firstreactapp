import '../styles/Home.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

const Home = () => {
  return (
    <div className="home">
      <Title>Добро пожаловать!</Title>
      <Link to="/users">
        <Button
          type="primary"
          shape="round"
          icon={<UserOutlined />}
          size="large"
        >
          Перейти к списку пользователей
        </Button>
      </Link>
    </div>
  );
};

export default Home;
