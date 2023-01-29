import { Col, Row } from 'antd';

const Container = ({ children }) => {
  return (
    <Row justify='center'>
      <Col xxl={16} xl={16} lg={18} md={20} sm={24} xs={24}>
        {children}
      </Col>
    </Row>
  );
};

export default Container;
