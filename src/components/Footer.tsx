import { CopyrightOutlined } from '@ant-design/icons';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <CopyrightOutlined style={{ marginRight: '5px' }} />
        2022,
        <a href="https://github.com/ivan-nesusanin" target="blank">
          ivan-nesusanin
        </a>
      </div>
    </div>
  );
};

export default Footer;
