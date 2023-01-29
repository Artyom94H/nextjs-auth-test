import { Col, Row, Typography, Avatar, Skeleton } from 'antd';
import { StyledAccountItem } from 'components/account-list/styled';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useMemo } from 'react';

const LoaderItem = () => {
  return (
    <>
      <StyledAccountItem span={24}>
        <Row align='middle'>
          <Col xxl={1} xl={1} lg={1} md={1} xs={4} sm={4}>
            <Skeleton.Avatar active={true} />
          </Col>
          <Col xxl={23} xl={23} lg={23} md={23} xs={20} sm={20}>
            <Row justify='space-between'>
              <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                <Skeleton.Input active={true} />
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                <Skeleton.Input active={true} />
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledAccountItem>
    </>
  );
};

const AccountItem = ({ data = {} }) => {
  return (
    <>
      <StyledAccountItem span={24}>
        <Link to={ROUTES.accountsGuest.path.replace(':id', data.slug)}>
          <Row align='middle'>
            <Col xxl={1} xl={1} lg={1} md={1} xs={4} sm={4}>
              <Avatar />
            </Col>
            <Col xxl={23} xl={23} lg={23} md={23} xs={20} sm={20}>
              <Row justify='space-between'>
                <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                  {data.name}
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                  {data.email}
                </Col>
              </Row>
            </Col>
          </Row>
        </Link>
      </StyledAccountItem>
    </>
  );
};

const AccountList = ({ loading, data = [] }) => {
  const arrForLoader = useMemo(() => {
    return Array.from(Array(10).keys());
  }, []);

  return (
    <>
      <Typography.Title>Список аккаунтов</Typography.Title>
      <Row gutter={[]}>
        {!!loading ? (
          arrForLoader.map((i, index) => <LoaderItem key={index.toString()} />)
        ) : (
          <>
            {data?.map((i, index) => (
              <AccountItem key={`${i.email}_${index}`} data={i} />
            ))}
          </>
        )}
      </Row>
    </>
  );
};

export default AccountList;
