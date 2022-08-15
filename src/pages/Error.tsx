import '../styles/Error.scss';
import { Button } from 'antd';
import { FrownOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';

const Error = () => {
  return (
    <div className="error">
      <Title level={2}>
        Запрашиваемая страница не существует...
        <FrownOutlined />
      </Title>
      <Link to="/">
        <Button type="primary" shape="round" size="large">
          <HomeOutlined />
          Перейти на главную страницу
        </Button>
      </Link>
    </div>
  );
};

export default Error;
