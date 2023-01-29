import { Button, Col, Row, Space, Dropdown, Avatar, Typography } from 'antd';
import { getUser } from 'hooks/use-user';
import { useRecoilValue } from 'recoil';
import { useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const PrimaryHeader = () => {
  const user = useRecoilValue(getUser);
  const location = useLocation();

  const items = useMemo(() => {
    return [
      {
        key: 'accounts',
        label: (
          <>
            <Link to={ROUTES.accountsList.path}>Список аккаунтов</Link>
          </>
        ),
      },
    ];
  }, []);

  const onClick = useCallback((e) => {
    console.log('Eve', e);
  }, []);

  const rightSide = useMemo(() => {
    const isSignIn = location.pathname.includes(ROUTES.signIn.path);
    const path = isSignIn ? ROUTES.signUp.path : ROUTES.signIn.path;

    if (user) {
      return (
        <>
          <Space>
            <Link to={ROUTES.accountsOwner.path}>
              <Typography.Text>{user?.name}</Typography.Text>
            </Link>
            <Dropdown
              menu={{
                items,
                onClick,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar />
                </Space>
              </a>
            </Dropdown>
          </Space>
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
  }, [user, location, onClick, items]);

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
