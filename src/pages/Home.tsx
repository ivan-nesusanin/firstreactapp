import React from 'react';
import '../scss/Home.scss';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;


const Home = () => {

  return (
    <div className='content-container'>
      <div className='content'>
        <Title>Добро пожаловать!</Title>
        <Link to='/users'>
          <Button type="primary" shape="round" icon={<UserOutlined />} size='large'>
            Перейти к списку пользователей
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;