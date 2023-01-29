import { StyledAccountHero } from 'components/account/styled';
import { Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Container from 'components/container';

const Account = ({ edit = false, user = {} }) => {
  return (
    <>
      <StyledAccountHero />
      <Container>
        <Row gutter={[0, 12]}>
          <Col span={24}>
            <Row>
              <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                <Typography.Title>
                  {user?.name}
                </Typography.Title>
                <Typography.Title level={5} type='secondary'>
                  {user?.email}
                </Typography.Title>
              </Col>
              {!!edit && (
                <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                  <Link to={ROUTES.accountsOwnerEdit.path}>
                    <Button>
                      Edit
                    </Button>
                  </Link>
                </Col>
              )}
            </Row>
          </Col>
          <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>

          </Col>
          {!!edit && (
            <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
              <Button>
                Sign out
              </Button>
            </Col>
          )}

        </Row>
      </Container>
    </>
  );
};

export default Account;
