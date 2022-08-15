import '../styles/Users.scss';
import UserTable from '../components/UserTable';
import { Typography, Col, Row } from 'antd';

const { Title } = Typography;

const Users = () => {
  return (
    <div className='users'>
      <Title level={3}>
        Список пользователей
      </Title>
      <Row>
        <Col xs={24} md={{span: 20, offset: 2}}>
          <UserTable/>
        </Col>
      </Row>
    </div>
  );
};

export default Users;