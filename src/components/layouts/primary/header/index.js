import { Button, Col, Row, Space } from 'antd';
import { getUser } from 'hooks/use-user';
import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const PrimaryHeader = () => {
  const user = useRecoilValue(getUser);
  const location = useLocation();

  const rightSide = useMemo(() => {
    const isSignIn = location.pathname.includes(ROUTES.signIn.path);
    const path = isSignIn ? ROUTES.signUp.path : ROUTES.signIn.path;

    if (user) {
      return (
        <>
          {/*<Dropdown*/}
          {/*  menu={{*/}
          {/*    items,*/}
          {/*    onClick,*/}
          {/*  }}*/}
          {/*  trigger={['click']}*/}
          {/*>*/}
          {/*  <a onClick={(e) => e.preventDefault()}>*/}
          {/*    <Space>*/}
          {/*      Click me*/}
          {/*      <DownOutlined />*/}
          {/*    </Space>*/}
          {/*  </a>*/}
          {/*</Dropdown>*/}
        </>
      );
    }

    return (
      <>
        <Link to={path}>
          <Button>{isSignIn ? 'Зарегистрироватся' : 'Войти'}</Button>
        </Link>
      </>
    );
  }, [user, location]);

  // console.log('user', user);
  return (
    <>
      <Row>
        <Col span={12}>
          <Space>
            <span>image</span>
            <span>some text</span>
          </Space>
        </Col>
        <Col span={12}>
          <Row justify='end'>
            <Col>{rightSide}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PrimaryHeader;
