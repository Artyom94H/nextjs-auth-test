import { Col, Row, Space, Typography } from 'antd';
import { useRecoilValue } from 'recoil';
import { getUser } from 'hooks/use-user';
import { useLocation, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { ROUTES } from 'constants/routes';

const PrimaryFooter = () => {
  const user = useRecoilValue(getUser);
  const location = useLocation();

  const content = useMemo(() => {
    const isSignIn = location.pathname.includes(ROUTES.signIn.path);
    const path = isSignIn ? ROUTES.signUp.path : ROUTES.signIn.path;
    const signInText = 'Нету аккаунта ?';
    const signUpText = 'Уже есть аккоунт ?';
    return (
      <Space>
        <Typography.Text type='secondary'>
          {isSignIn ? signInText : signUpText}
        </Typography.Text>
        <Typography.Text>
          <Link to={path}>
            {isSignIn ? 'Зарегистрироватся' : 'Войти'}
          </Link>
        </Typography.Text>
      </Space>
    );
  }, [location]);
  return (
    <>
      {!user && (
        <Row justify='center'>
          <Col>
            {content}
          </Col>
        </Row>
      )}
    </>
  );
};

export default PrimaryFooter;
