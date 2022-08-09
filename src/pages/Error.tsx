import React from 'react';
import '../scss/Error.scss';
import { Button, Typography } from 'antd';
import { FrownOutlined, HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

const { Title } = Typography;


const Error = () => {
  return (
    <div className='error'>
      <Title level={2}>
        Запрашиваемая страница не существует...
        <FrownOutlined />
      </Title>
      <Link to='/'>
          <Button type="primary" shape="round" size='large'>
            <HomeOutlined />
            Перейти на главную страницу
          </Button>
        </Link>
    </div>
  );
};

export default Error;